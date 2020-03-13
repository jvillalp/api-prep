const router = require("express").Router();
const Characters = require("../helpers/charactersModel");

//GET the charcters
router.get("/", (req, res) => {
  Characters.get()
    .then(characters => {
      res.status(200).json(characters);
    })
    .catch(err => {
      res.status(500).json({
        errorMessage: `this is an error ${err}`
      });
    });
});

//GET a charcter by :id
router.get("/:id", (req, res) => {
  const { id } = req.params;
  Characters.get(id)
    .then(charcter => {
        res.status(200).json(charcter)
    })
    .catch(err => {
        res.status(500).json({
            errorMessage: `this is an error ${err}`
        })
    });
});

//POST character
router.post('/', (req, res) => {
    const newCharacter = req.body;
    Characters.insert(newCharacter)
    .then((newCharacter)=> {
        res.status(201).json(newCharacter);
    })
    .catch(err => {
        res.status(500).json({
            errorMessage:  `this is an error ${err}`

        })
    })
})

//DEL /:id
router.delete("/:id", (req, res) => {
    const {id} = req.params;
    Characters.remove(id)
    .then(deleteCharacter => {
        res.status(201).json(deleteCharacter)
    })
    .catch(err => {
        res.status(500).json({errorMessage: `this is an error ${err}`})
    })
})

//PUT /:id
router.put('/:id', (req, res) => {
    const updateCharacter = req.body;
    const {id} = req.params;
    Characters.update(id, updateCharacter)
    .then(updateCharacter => {
        res.status(200).json(updateCharacter)
    })
    .catch(err => {
        res.status(500).json({ errorMessage:`this is an error ${err}`})
    })
})

module.exports = router;
