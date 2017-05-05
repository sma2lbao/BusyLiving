host: https://api.busyliving.com/v1/
/articles/

get:
    query: {
        type: "travel",
        offset: 0,
        limit: 20,
    }
    responese:
    {
        data: [
            {
                id: "0",
                title: "title",
                author: "author",
                create-time: "1200032300",
                image: "https://image.jpg"
            }
        ],
        total: 344,
        code: 0,
        msg: "ok",
    }


/article/{id}/

get:
    query: {

    }

    responese:
    {
        data: {
            id: "0",
            title: "title",
            author: "author",
            create-time: "1200032300",
            image: "https://image.jpg",
            article: "arrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr",
        },
        code: 0,
        msg: "ok"
    }

delete:

    responese:
    {
        data: {
        },
        code: 0,
        msg: "ok"
    }

patch:
    query: {
        key: "image",
        value: "https://newimage.jpg"
    }

    responese: {
        data: {
            id: "0",
            title: "title",
            author: "author",
            create-time: "1200032300",
            image: "https://image.jpg",
            article: "arrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr",
        },
        code: 0,
        msg: "ok"
    }

/article/
put:

    responese:
    {
        data: {
            id: "0",
            title: "title",
            author: "author",
            create-time: "1200032300",
            image: "https://image.jpg",
            article: "arrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr",
        },
        code: 0,
        msg: "ok"
    }

/article/{id}/comments

get:
    query: {
        offset: 0,
        limit: 20,
        sort: 0,
    }

    responese: {
        data: [
        {
            id: "0",
            picture: "https://picture.jpg",
            comment-author: "author",
            create-time: 33333333333,
            comment: "comment comment comment"
        }],
        code: 0,
        msg: "ok",
        total: 20,
    }

post:
    query: {
        picture: "https://picture.jpg",
        comment-author: "author",
        comment: "comment comment comment"
    }
    responese: {
        data: {
            id: "0",
            picture: "https://picture.jpg",
            comment-author: "author",
            create-time: 33333333333,
            comment: "comment comment comment"
        },
        code: 0,
        msg: "ok"
    }

/article/{id}/comment

get:
    query: {
        id: 0,
    }

    responese: {
        data: {
            id: "0",
            picture: "https://picture.jpg",
            comment-author: "author",
            create-time: 33333333333,
            comment: "comment comment comment"
        },
        code: 0,
        msg: 'ok',
    }

delete:

    query: {
        id: 0,
    }
    responese: {
        data: {},
        code: 0,
        msg: 'ok'
    }
