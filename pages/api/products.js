import { query as q } from "faunadb";

export default (async function products(req, res) {
  try {
    const { Paginate, Documents, Collection, Lambda, Get, Var } = q;

    const data = await fetch(
      q.Map(
        Paginate(Documents(Collection("products"))),
        Lambda(["productRef"], Get(Var("productRef")))
      )
    );

    console.log(data);

    res.status(200).json(products);
  } catch (error) {
    res.status(error.status || 500).json({ error: error.message });
  }
});
