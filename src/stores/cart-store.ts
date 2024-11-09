import { create } from "zustand";
import { combine } from "zustand/middleware";
import { CartProduct, Product } from "../types/product";

const cartStore = create(
  combine(
    {
      products: [] as CartProduct[],
    },
    (set) => ({
      actions: {
        addProduct: (product: CartProduct) =>
          set((state) => ({ products: [...state.products, product] })),
        removeProduct: (productId: number) =>
          set((state) => ({
            products: state.products.filter(
              (product) => product.id !== productId
            ),
          })),
        updateProductAmount: (productId: number, quantity: number) =>
          set((state) => ({
            products: state.products.map((product) => {
              if (product.id === productId) {
                return {
                  ...product,
                  quantity,
                };
              }

              return product;
            }),
          })),
      },
    })
  )
);

export const useCartStoreProducts = () => cartStore((state) => state.products);

export const useCartStoreActions = () => cartStore((state) => state.actions);
