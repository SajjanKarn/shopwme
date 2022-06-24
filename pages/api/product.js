// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default async function handler(req, res) {
  try {
    const request = await fetch(
      `http://localhost:1337/http://localhost:1337/api/products?populate=*`
    );
    const result = await request.json();

    return res.status(200).json({ ...result });
  } catch (err) {
    console.log(err);
  }
}
