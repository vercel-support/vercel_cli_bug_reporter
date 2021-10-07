export default async (req, res) => {
  const { username } = req.query;
  res.setHeader("Cache-Control", "s-maxage=3600, stale-while-revalidate");
  res.json(`Hello, ${username}`);
};
