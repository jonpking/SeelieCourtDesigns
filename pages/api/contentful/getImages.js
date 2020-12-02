import client from 'services/contentful';

export default (req, res) => {
    client
        .getEntries("galleryItem")
        .then(entries => res.status(200).json(entries.items));
}
