export const explorePage = {
    "tag": "div",
    "attributes": {
        "class": "explorer",
        "style": "display:flex"
    },

    "children": [
        {
            "tag": "aside",
            "children": [
                {
                    "tag": "nav",
                    "children": [
                        { "tag": "br" },
                        {
                            "tag": "ul",
                            "children": [
                                {
                                    "tag": "li", "children": [{
                                        "tag": "a", "attributes": {
                                            "click": "update-page",
                                            "href": "#/add-org"
                                        }, "content": "Add Org"
                                    }]
                                },
                                {
                                    "tag": "li", "children": [{
                                        "tag": "a", "attributes": {
                                            "click": "update-page",
                                            "href": "#/get-org"
                                        }, "content": "View Org"
                                    }]
                                }
                            ]
                        }
                    ]
                }
            ]
        }
        ,
        {
            "tag": "div",

            "attributes": {

                "style": `min-height:100vh;width: -webkit-fill-available;padding:1rem`,
                "id": "appBody",
            },
        }

    ]
}