import { getAllProduits } from "../apis/users";

export async function produitLoader() {
  const produits = await getAllProduits();
  return produits;
}
