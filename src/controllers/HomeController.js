class HomeController {
   index(req, res) {
      res.json({ allRight: true, status: 200 });
   }
}

export default new HomeController();
