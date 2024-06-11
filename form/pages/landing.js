export const landing = {
    "tag": "div",
    "children": [
        {
            "tag": "nav",
            "children": [
                {
                    "tag": "header",
                    "children": [
                        {
                            "tag": "h2",
                            "content": "Dia"
                        }
                    ]
                },
                {
                    "tag": "input",
                    "attributes": {
                        "type": "checkbox",
                        "id": "nav-check"
                    }
                },
                {
                    "tag": "div",
                    "attributes": {
                        "class": "nav-btn"
                    },
                    "children": [
                        {
                            "tag": "label",
                            "attributes": {
                                "for": "nav-check"
                            },
                            "children": [
                                { "tag": "span" },
                                { "tag": "span" },
                                { "tag": "span" }
                            ]
                        }
                    ]
                },
                {
                    "tag": "ul",
                    "children": [
                        {
                            "tag": "li",
                            "attributes": {
                                "click": "update-page",
                                "href": "#/signin"
                            },
                            "children": [{
                                "tag": "a", "attributes": {
                                    "click": "update-page",
                                    "href": "#/signin"
                                },
                                "content": "Login"
                            },

                            {
                                "tag": "a", "attributes": {
                                    "click": "update-page",
                                    "href": "#/signup"
                                },
                                "content": "Register"
                            }]
                        },

                    ]
                }
            ]
        },
        { "tag": "br" },


        { "tag": "br" },
        {
            "tag": "div",
            "attributes": {
                "class": "container"
            },
            "children": [
                {
                    "tag": "section",
                    "attributes": {
                        "class": "display-flex-2x2-wrap"
                    },
                    "children": [
                        {
                            "tag": "article",
                            "attributes": {
                                "style": "flex: 1;font-family:monospace"
                            },
                            "children": [
                                {
                                    "tag": "h4",
                                    "attributes": {
                                        "style": "font-weight: lighter;color:#aca1a1"
                                    },
                                    "content": "#1 Project Management System for Teams"
                                },
                                { "tag": "br" },
                                {
                                    "tag": "p",attributes:{"style":"font-size:3rem"},
                                    "content": "Dia Project Management System:",
                                },


                                { "tag": "p",attributes:{"style":"font-size:3rem"}, "content": "Empower your team to collaborate," },


                                { "tag": "p",attributes:{"style":"font-size:3rem"}, "content": "plan, and execute projects effectively" },

                            ]
                        },

                    ]
                }
            ]
        }
    ]
}
