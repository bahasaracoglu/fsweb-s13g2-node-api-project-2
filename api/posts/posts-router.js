// posts için gerekli routerları buraya yazın
const router = require("express").Router();
const postsModel = require("./posts-model");

router.get("/", async (req, res) => {
  try {
    const all = await postsModel.find();
    res.json(all);
  } catch (error) {
    res.status(500).json({ message: "Gönderiler alınamadı" });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const post = await postsModel.findById(req.params.id);
    if (!post) {
      res.status(404).json({ message: "Belirtilen ID'li gönderi bulunamadı" });
    }
    {
      res.json(post);
    }
  } catch (error) {
    res.status(500).json({ message: "Gönderi bilgisi alınamadı" });
  }
});

module.exports = router;
