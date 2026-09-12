"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import {
  CART_STORAGE_KEY,
  cartItemCount,
  cartSubtotal,
  lineKey,
  type CartLine,
} from "./types";

type AddItemInput = Omit<CartLine, "quantity"> & { quantity?: number };

type CartToastState = { name: string } | null;

type CartContextValue = {
  lines: CartLine[];
  itemCount: number;
  cupcakeCount: number;
  subtotal: number;
  justAdded: boolean;
  meetsMinimum: boolean;
  toast: CartToastState;
  addItem: (item: AddItemInput) => void;
  setQuantity: (productId: string, pack: CartLine["pack"], quantity: number) => void;
  removeItem: (productId: string, pack: CartLine["pack"]) => void;
  clearCart: () => void;
  dismissToast: () => void;
};

const CartContext = createContext<CartContextValue | null>(null);

function packCupcakes(pack: CartLine["pack"]): number {
  switch (pack) {
    case "each":
      return 1;
    case "half-dozen":
      return 6;
    case "dozen":
      return 12;
  }
}

export function totalCupcakes(lines: CartLine[]): number {
  return lines.reduce(
    (sum, line) => sum + line.quantity * packCupcakes(line.pack),
    0,
  );
}

export function CartProvider({ children }: { children: ReactNode }) {
  const [lines, setLines] = useState<CartLine[]>([]);
  const [hydrated, setHydrated] = useState(false);
  const [justAdded, setJustAdded] = useState(false);
  const [toast, setToast] = useState<CartToastState>(null);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(CART_STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw) as { lines?: CartLine[] };
        if (Array.isArray(parsed.lines)) setLines(parsed.lines);
      }
    } catch {
      // ignore corrupt storage
    }
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    localStorage.setItem(CART_STORAGE_KEY, JSON.stringify({ lines }));
  }, [lines, hydrated]);

  const addItem = useCallback((item: AddItemInput) => {
    const qty = item.quantity ?? 1;
    setLines((prev) => {
      const key = lineKey(item);
      const existing = prev.find((l) => lineKey(l) === key);
      if (existing) {
        return prev.map((l) =>
          lineKey(l) === key ? { ...l, quantity: l.quantity + qty } : l,
        );
      }
      return [...prev, { ...item, quantity: qty }];
    });
    setJustAdded(true);
    setToast({ name: item.name });
    window.setTimeout(() => setJustAdded(false), 600);
  }, []);

  const setQuantity = useCallback(
    (productId: string, pack: CartLine["pack"], quantity: number) => {
      setLines((prev) => {
        if (quantity <= 0) {
          return prev.filter((l) => !(l.productId === productId && l.pack === pack));
        }
        return prev.map((l) =>
          l.productId === productId && l.pack === pack ? { ...l, quantity } : l,
        );
      });
    },
    [],
  );

  const removeItem = useCallback((productId: string, pack: CartLine["pack"]) => {
    setLines((prev) =>
      prev.filter((l) => !(l.productId === productId && l.pack === pack)),
    );
  }, []);

  const clearCart = useCallback(() => setLines([]), []);
  const dismissToast = useCallback(() => setToast(null), []);

  const cupcakes = totalCupcakes(lines);

  const value = useMemo<CartContextValue>(
    () => ({
      lines,
      itemCount: cartItemCount(lines),
      cupcakeCount: cupcakes,
      subtotal: cartSubtotal(lines),
      justAdded,
      meetsMinimum: cupcakes === 0 || cupcakes >= 6,
      toast,
      addItem,
      setQuantity,
      removeItem,
      clearCart,
      dismissToast,
    }),
    [
      lines,
      cupcakes,
      justAdded,
      toast,
      addItem,
      setQuantity,
      removeItem,
      clearCart,
      dismissToast,
    ],
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart(): CartContextValue {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
}
