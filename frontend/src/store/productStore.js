import { create } from "zustand";
export const useProductStore = create((set) => ({
  products: [],
  setProducts: (products) => set({ products }),
  createProduct: async (newProduct) => {
    if (!newProduct.name || !newProduct.price || !newProduct.image) {
      return { success: "false", message: "fill all fields plz" };
    }
    const res = await fetch("/api/products", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newProduct),
    });
    const data = await res.json();
    set((state) => ({ products: [...state.products, data.data] }));
    return { success: true, message: "product created successfully" };
  },
  fetchProducts: async () => {
    try {
      const res = await fetch("/api/products", {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      });
      if (!res.ok) {
        return { success: false, message: "error fetching products" };
      }
      const data = await res.json();
      set({ products: data.data });
      return {
        success: true,
        message: "fetching successfull",
        data: data.data,
      };
    } catch (error) {
      console.error(error);
      return { success: false, message: "an error occured", data: "{}" };
    }
  },
  UpdateProduct: async (id, updatedProduct) => {
    try {
      const res = await fetch(`/api/products/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updatedProduct),
      });
      console.log(res);
      if (!res.ok) {
        return { success: false, message: "Can't find product" };
      }
      const data = res.json();
      set({ products: data.data });
      return {
        success: true,
        message: "product updated successfully",
        data: data.data,
      };
    } catch (error) {
      console.log(error);
      return {
        success: false,
        message: "error occured",
        data: "{}",
      };
    }
  },
  deleteMyProduct: async (id) => {
    try {
      const res = await fetch(`/api/products/${id}`, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
      });
      if (!res.ok) {
        console.log("enter a valid id");
        return {
          success: false,
          message: "enter a valid id",
        };
      }
      return {
        success: true,
        message: "item deleted successfully",
      };
    } catch (error) {
      console.log(error);
      return {
        success: false,
        message: "an error occured please check id or try later",
      };
    }
  },
}));
