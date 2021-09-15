import { getAccessToken, withApiAuthRequired } from "@auth0/nextjs-auth0";
import { query as q, Client } from "faunadb";

export default withApiAuthRequired(async function orders(req, res) {
  try {
    const { accessToken } = await getAccessToken(req, res);
    const client = new Client({ secret: accessToken });
    const { Paginate, Documents, Collection, Lambda, Get, Var } = q;
    console.log(accessToken);

    const data = await client.query(
      q.Map(
        Paginate(Documents(Collection("orders"))),
        Lambda(["orderRef"], Get(Var("orderRef")))
      )
    );

    console.log(data);

    res.status(200).json(orders);
  } catch (error) {
    res.status(error.status || 500).json({ error: error.message });
  }
});
