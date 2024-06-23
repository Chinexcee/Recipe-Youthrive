const Users = require('../model/usersModel');

const favorites = async (req, res) => {
    try {
        const user = await Users.findById(req.user.id);
        if (!user) {
            return res.status(404).send({ message: 'Not found' });
        }
        if (!user.favorites.includes(req.params.recipeIdId)) {
            user.favorites.push(req.params.recipeId);
            await user.save();
        }
        res.send({ message: 'Recipe successfully added to favorites' });
    } catch (error) {
        res.status(500).send({ message: error })
    }
}

const removeFavorites = async (req, res) => {
    try {
        const user = await Users.findById(req.user.id);
        if (!user) {
            return res.status(404).send({ message: 'Not found' });
        }
        user.favorites = user.favorites.filter(recipeId => recipeId.toString() !== req.params.recipeId);
        await user.save()
        res.send({ message: 'removed successfully' })
    } catch (error) {
        res.status(500).send({ message: error })
    }
}

module.exports = { favorites, removeFavorites };
