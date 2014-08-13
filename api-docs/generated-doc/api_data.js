define({ api: [
  {
    "type": "",
    "url": "{}",
    "title": "Authentication",
    "name": "Authenticate",
    "group": "API",
    "description": "<p>The authentication to the api is using &quot;Basic Auth&quot;. So just put username/password inside each request to be authenticated.<br/>The api try to be as REST as possible. The aim is to be RESTful. It means that there are no states (sessions) on server side. Each request is unique and has to holdeverything needed like user username/credential.</p>",
    "success": {
      "fields": {
        "Basic Auth parameters": [
          {
            "group": "authRequest",
            "field": "username",
            "optional": false,
            "description": ""
          },
          {
            "group": "authRequest",
            "field": "password",
            "optional": false,
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "sources/API.js"
  },
  {
    "type": "",
    "url": "{}",
    "title": "Header parameters",
    "name": "HeaderParams",
    "group": "API",
    "description": "<p>The header of all your request to the API has to / may include some useful parameters.</p>",
    "success": {
      "fields": {
        "Header request parameters": [
          {
            "group": "headerRequest",
            "type": "String",
            "field": "Accept-Language",
            "defaultValue": "Locale du navigateur",
            "optional": true,
            "description": "<p>Langue de retour demandée. Exemple : fr-FR.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Use example:",
          "content": "Request Header:\n---------------\nGET /api/events HTTP/1.1\nHost: localhost:1337\nAccept-Language: fr-FR\n...\n"
        }
      ]
    },
    "error": {
      "fields": {
        "Header response parameters": [
          {
            "group": "headerResponse",
            "type": "String",
            "field": "test",
            "optional": false,
            "description": "<p>qsd</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response sample:",
          "content": "Response Header:\n---------------\n...\n"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "sources/API.js"
  },
  {
    "type": "",
    "url": "{}",
    "title": "Summary",
    "name": "Summary",
    "group": "API",
    "description": "<p>HTTP Status Code Summary:</b><br/><b>200 OK</b> - Everything worked as expected.<br/><b>400 Bad Request</b> - Often missing a required parameter.<br/><b>401 Unauthorized</b> - No valid API key provided.<br/><b>402 Request Failed</b> - Parameters were valid but request failed.<br/><b>405 Method not allowed</b> - Used to indicate that the requested URL exists, but the requested HTTP method is not applicable. For example, POST /users/12345 where the API doesn&#39;t support creation of resources this way (with a provided ID).<br/><b>404 Not Found</b> - The requested item doesn&#39;t exist.<br/><b>409 Conflict</b> - Whenever a resource conflict would be caused by fulfilling the request. Duplicate entries, such as trying to create two customers with the same information, and deleting root objects when cascade-delete is not supported are a couple of examples.<br/><b>500, 502, 503, 504 Server errors</b> - any general error on the system.</p>",
    "version": "0.0.0",
    "filename": "sources/API.js"
  },
  {
    "type": "get",
    "url": "/dev/db",
    "title": "Display some database info",
    "name": "displayDB",
    "group": "Dev",
    "description": "<p>Display some database info</p>",
    "examples": [
      {
        "title": "Use example",
        "content": "get http://localhost/dev/db\n"
      }
    ],
    "version": "0.0.0",
    "filename": "sources/Development.js"
  },
  {
    "type": "get",
    "url": "/dev/logs",
    "title": "Display logs",
    "name": "displayLogs",
    "group": "Dev",
    "groupDescription": "<p>Documentation relative to dev only purpose</p>",
    "description": "<p>Display logs</p>",
    "examples": [
      {
        "title": "Use example",
        "content": "get http://localhost/dev/logs\n"
      }
    ],
    "version": "0.0.0",
    "filename": "sources/Development.js"
  },
  {
    "type": "post",
    "url": "/dev/db",
    "title": "Initialize database",
    "name": "initDB",
    "group": "Dev",
    "description": "<p>Initialize some basic necessary entries in database</p>",
    "examples": [
      {
        "title": "Use example",
        "content": "post http://localhost/dev/db\n"
      }
    ],
    "version": "0.0.0",
    "filename": "sources/Development.js"
  },
  {
    "type": "get",
    "url": "/dev/delete-logs",
    "title": "Reset logs",
    "name": "resetLogs",
    "group": "Dev",
    "description": "<p>Reset logs</p>",
    "examples": [
      {
        "title": "Use example",
        "content": "get http://localhost/dev/delete-logs\n"
      }
    ],
    "version": "0.0.0",
    "filename": "sources/Development.js"
  },
  {
    "type": "",
    "url": "{}",
    "title": "Errors codes",
    "name": "ErroCode",
    "group": "Errors",
    "description": "<p>redh00d use many way to tell whether an error occurs and what was the error. The most reliable and trustable way is the error code. Errors codes are fixed and you can only manage with them to treat errors on customer side. Just read the code and display the messages you want.</p>",
    "header": {
      "fields": {
        "Codes detailed.": [
          {
            "group": "Errors",
            "type": "String",
            "field": "code",
            "optional": false,
            "description": ""
          },
          {
            "group": "Errors",
            "type": "String",
            "field": "code.resourceNotFound",
            "optional": false,
            "description": "<p>La ressource recherchée n&#39;a pas été trouvée.</p>"
          },
          {
            "group": "Errors",
            "type": "String",
            "field": "code.modelNotFound",
            "optional": false,
            "description": "<p>Le model / classe recherché(e) n&#39;a pas été trouvé(e).</p>"
          },
          {
            "group": "Errors",
            "type": "String",
            "field": "code.pageNotFound",
            "optional": false,
            "description": "<p>La page demandée n&#39;a pas été trouvée.</p>"
          },
          {
            "group": "Errors",
            "type": "String",
            "field": "code.dbUnavailable",
            "optional": false,
            "description": "<p>.</p>"
          },
          {
            "group": "Errors",
            "type": "String",
            "field": "code.noAccessRights",
            "optional": false,
            "description": "<p>.</p>"
          },
          {
            "group": "Errors",
            "type": "String",
            "field": "code.emailArleadyTaken",
            "optional": false,
            "description": "<p>.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "sources/Error.js"
  },
  {
    "type": "",
    "url": "{}",
    "title": "Errors responses",
    "name": "ErrorResponse",
    "group": "Errors",
    "description": "<p>redh00d uses conventional HTTP response codes to indicate success or failure of an API request.<br/>In general, codes in the 2xx range indicate success, codes in the 4xx range indicate an error<br/>that resulted from the provided information (e.g. a required parameter was missing, a charge failed, etc.), and<br/>codes in the 5xx range indicate an error with redh00d servers.</p>",
    "error": {
      "fields": {
        "Response attributes": [
          {
            "group": "errorResponse",
            "type": "String",
            "field": "message",
            "optional": false,
            "description": "<p>Error message.</p>"
          },
          {
            "group": "errorResponse",
            "type": "String",
            "field": "description",
            "optional": true,
            "description": "<p>More detailed error message.</p>"
          },
          {
            "group": "errorResponse",
            "type": "String",
            "field": "code",
            "optional": false,
            "description": "<p>Error code (Check the section above).</p>"
          },
          {
            "group": "errorResponse",
            "type": "Object[]",
            "field": "params",
            "optional": true,
            "description": "<p>The parameters the error relates to if the error is parameter-specific.</p>"
          },
          {
            "group": "errorResponse",
            "type": "Object[]",
            "field": "params.field",
            "optional": false,
            "description": "<p>The field name relatives to error.</p>"
          },
          {
            "group": "errorResponse",
            "type": "Object[]",
            "field": "params.code",
            "optional": false,
            "description": "<p>The code error.</p>"
          },
          {
            "group": "errorResponse",
            "type": "Object[]",
            "field": "params.message",
            "optional": false,
            "description": "<p>.</p>"
          },
          {
            "group": "errorResponse",
            "type": "Object[]",
            "field": "params.description",
            "optional": true,
            "description": "<p>.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error (400 Bad request) response sample (case of parameters validation failed):",
          "content": "   HTTP/1.1 400 BAD REQUEST\n   {\n     \"message\": \"The requested parameters are not correct\",\n     \"code\": \"invalidParams\"\n     \"params\": [\n        {\n          \"message\": \"This field should contain at least 4 characters\",\n          \"code\": \"fieldTooShort\"\n          \"field\": \"foo\"\n        },\n        ...\n     ],\n   }\n"
        },
        {
          "title": "Error (404 Not Found) response sample:",
          "content": "   HTTP/1.1 404 Not Found\n   {\n     \"message\": \"This user doesn't exist\",\n     \"code\": \"modelNotFound\"\n   }\n"
        },
        {
          "title": "Error (403 Forbidden Error) response sample:",
          "content": "   HTTP/1.1 403 Forbidden Error\n   {\n     \"message\": \"You do not have enough rights to access this resource\",\n     \"code\": \"noAccessRights\"\n   }\n"
        },
        {
          "title": "Error (409 Conflict Error) response sample:",
          "content": "   HTTP/1.1 409 Conflict Error\n   {\n     \"message\": \"Email already taken\",\n     \"description\": \"foo\",\n     \"code\": \"emailArleadyTaken\"\n   }\n"
        },
        {
          "title": "Error (500 Serveur Error) response sample:",
          "content": "   HTTP/1.1 500 Serveur Error\n   {\n     \"message\": \"Database unavailable\",\n     \"code\": \"dbUnavailable\"\n   }\n"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "sources/Error.js"
  },
  {
    "parameter": {
      "fields": {
        "Parameters (URL)": [
          {
            "group": "urlParam",
            "type": "Number",
            "field": "id",
            "optional": true,
            "description": "<p>Use it to retrieve only one event with its ID.</p>"
          },
          {
            "group": "urlParam",
            "type": "String",
            "field": "eventName",
            "optional": true,
            "description": ""
          },
          {
            "group": "urlParam",
            "type": "String",
            "field": "eventDate",
            "optional": true,
            "description": ""
          },
          {
            "group": "urlParam",
            "type": "String",
            "field": "eventPlace",
            "optional": true,
            "description": ""
          },
          {
            "group": "urlParam",
            "type": "String",
            "field": "sort",
            "optional": true,
            "description": "<p>get the result sorted</p>"
          }
        ]
      }
    },
    "group": "Event.js",
    "type": "",
    "url": "",
    "version": "0.0.0",
    "filename": "sources/Event.js"
  },
  {
    "type": "post",
    "url": "/users/:id/events",
    "title": "Create an event",
    "name": "CreateEvent",
    "group": "Events",
    "permission": {
      "name": "authenticated",
      "title": "Authentication requiered",
      "description": ""
    },
    "description": "<p>Create an event which is retrieve if creation was a success.<br/><b>Throw error:</b> 400.</p>",
    "parameter": {
      "fields": {
        "Parameters (Form Data)": [
          {
            "group": "dataParam",
            "type": "String",
            "field": "name",
            "optional": false,
            "description": ""
          },
          {
            "group": "dataParam",
            "type": "String",
            "field": "description",
            "optional": true,
            "description": ""
          },
          {
            "group": "dataParam",
            "type": "String",
            "field": "place",
            "optional": true,
            "description": ""
          },
          {
            "group": "dataParam",
            "type": "String",
            "field": "date",
            "optional": false,
            "description": ""
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Use example",
        "content": "post http://localhost/events\nform-data: name=MyEvent&date=2014-12-24\n"
      }
    ],
    "error": {
      "examples": [
        {
          "title": "Error (400 Bad request) response sample (case of parameters validation failed):",
          "content": "   HTTP/1.1 400 BAD REQUEST\n   {\n     \"message\": \"The requested parameters are not correct\",\n     \"code\": \"invalidParams\"\n     \"params\": [\n        {\n          \"message\": \"This field should contain at least 4 characters\",\n          \"code\": \"fieldTooShort\"\n          \"field\": \"foo\"\n        },\n        ...\n     ],\n   }\n"
        }
      ]
    },
    "success": {
      "fields": {
        "Success (201 Created) response parameters": [
          {
            "group": "201",
            "type": "Object",
            "field": "object",
            "optional": false,
            "description": "<p>The created object.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success (201 Created) response sample:",
          "content": "HTTP/1.1 201 Created\n{\n   \"object\": {\n       \"field1\": \"Foo\",\n       \"field2\": \"Bar\",\n       ...\n   },\n}\n"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "sources/Event.js"
  },
  {
    "type": "post",
    "url": "/events/:id/invitations",
    "title": "Create an event invitation",
    "name": "CreateEventInvitation",
    "group": "Events",
    "permission": "authenticated author",
    "description": "<p>Create one event invitation.<br/><b>Throw error:</b> 400.</p>",
    "parameter": {
      "fields": {
        "Parameters (URL)": [
          {
            "group": "urlParam",
            "type": "Number",
            "field": "id",
            "optional": false,
            "description": "<p>Event&#39;s ID</p>"
          }
        ],
        "Parameters (Form Data)": [
          {
            "group": "dataParam",
            "type": "Number",
            "field": "target_id",
            "optional": false,
            "description": ""
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Use example",
        "content": "post http://localhost/events/15/invitations\nform-data: target_id=36\n"
      }
    ],
    "success": {
      "fields": {
        "Success (201 Created) response parameters": [
          {
            "group": "201",
            "type": "Object",
            "field": "object",
            "optional": false,
            "description": "<p>The created object.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success (201 Created) response sample:",
          "content": "HTTP/1.1 201 Created\n{\n   \"object\": {\n       \"field1\": \"Foo\",\n       \"field2\": \"Bar\",\n       ...\n   },\n}\n"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "sources/Event.js"
  },
  {
    "type": "delete",
    "url": "/users/:id/events/:id",
    "title": "Delete an Event",
    "name": "DeleteEvent",
    "group": "Events",
    "permission": "authenticated eventOwner",
    "description": "<p>Delete an event<br/><b>Throw error:</b> 404.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "field": "id",
            "optional": false,
            "description": "<p>Event&#39;s ID</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Use example",
        "content": "delete http://localhost/events/15\n"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success (204 No content) response sample:",
          "content": "HTTP/1.1 204 No content\n{\n}\n"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "sources/Event.js"
  },
  {
    "type": "delete",
    "url": "/events/:idEvent/invitations/:idInvitation",
    "title": "Delete an event invitation",
    "name": "DeleteEventInvitation",
    "group": "Events",
    "permission": {
      "name": "authenticated",
      "title": "Authentication requiered",
      "description": ""
    },
    "description": "<p>Delete an invitation<br/><b>Throw error:</b> 404.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "field": "idEvent",
            "optional": false,
            "description": "<p>Event&#39;s ID</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "field": "idInvitation",
            "optional": false,
            "description": "<p>Invitation&#39;s ID</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Use example",
        "content": "delete http://localhost/events/5/invitations/10\n"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success (204 No content) response sample:",
          "content": "HTTP/1.1 204 No content\n{\n}\n"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "sources/Event.js"
  },
  {
    "type": "delete",
    "url": "/events/:id/members/:id",
    "title": "Delete an event member",
    "name": "DeleteEventMember",
    "group": "Events",
    "version": "0.0.0",
    "filename": "sources/Event.js"
  },
  {
    "type": "delete",
    "url": "/events/:id_event/products/:id_product",
    "title": "Delete an event product",
    "name": "DeleteEventProduct",
    "group": "Events",
    "permission": "authenticated @todo",
    "description": "<p>Delete an event product.<br/><b>Throw error:</b> @todo</p>",
    "examples": [
      {
        "title": "Use example",
        "content": "delete http://localhost/events/15/products/10\n"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success (204 No content) response sample:",
          "content": "HTTP/1.1 204 No content\n{\n}\n"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "sources/Event.js"
  },
  {
    "type": "get",
    "url": "/events/:id",
    "title": "Find an event",
    "name": "FindEvent",
    "group": "Events",
    "groupDescription": "<p>API corresponding to Event</p>",
    "description": "<p>Find an event by its ID<br/><b>Throw error:</b> 404</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "field": "id",
            "optional": false,
            "description": "<p>Event unique ID.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Use example",
        "content": "get http://localhost/events/15\n"
      }
    ],
    "success": {
      "fields": {
        "Success (200 OK) response parameters": [
          {
            "group": "200",
            "type": "Object",
            "field": "object",
            "optional": false,
            "description": "<p>Requested object.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success (200 OK) response sample:",
          "content": "   HTTP/1.1 200 OK\n   {\n     \"object\": {\n        \"field1\": \"Foo\",\n        \"field2\": \"Bar\",\n        ...\n     },\n   }\n"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "sources/Event.js"
  },
  {
    "type": "post",
    "url": "/events/:id_event/invitations/:id_invitation",
    "title": "Find an event invitation",
    "name": "FindEventInvitation",
    "group": "Events",
    "permission": "authenticated author",
    "description": "<p>Find and event invitation.<br/><b>Throw error:</b> 404.</p>",
    "parameter": {
      "fields": {
        "Parameters (URL)": [
          {
            "group": "urlParam",
            "type": "Number",
            "field": "id_event",
            "optional": false,
            "description": "<p>Event&#39;s ID</p>"
          },
          {
            "group": "urlParam",
            "type": "Number",
            "field": "id_invitation",
            "optional": false,
            "description": "<p>Invitation&#39;s ID</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Use example",
        "content": "post http://localhost/events/15/invitations/15\n"
      }
    ],
    "success": {
      "fields": {
        "Success (200 OK) response parameters": [
          {
            "group": "200",
            "type": "Object",
            "field": "object",
            "optional": false,
            "description": "<p>Requested object.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success (200 OK) response sample:",
          "content": "   HTTP/1.1 200 OK\n   {\n     \"object\": {\n        \"field1\": \"Foo\",\n        \"field2\": \"Bar\",\n        ...\n     },\n   }\n"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "sources/Event.js"
  },
  {
    "type": "post",
    "url": "/events/:id_event/invitations/",
    "title": "Find event invitations",
    "name": "FindEventInvitations",
    "group": "Events",
    "permission": "authenticated author",
    "description": "<p>Find event invitations.<br/><b>Throw error:</b> 404.</p>",
    "parameter": {
      "fields": {
        "Parameters (URL)": [
          {
            "group": "urlParam",
            "type": "Number",
            "field": "id_event",
            "optional": false,
            "description": "<p>Event&#39;s ID</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Use example",
        "content": "post http://localhost/events/15/invitations\n"
      }
    ],
    "success": {
      "fields": {
        "Success (200 OK) response parameters": [
          {
            "group": "200",
            "type": "Object[]",
            "field": "objects",
            "optional": false,
            "description": "<p>The list of objects.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success (200 OK) response sample:",
          "content": "   HTTP/1.1 200 OK\n   {\n     \"objects\": [\n        \"object\": {\n            \"field1\": \"Foo\",\n            \"field2\": \"Bar\",\n            ...\n        },\n        ...\n     ],\n   }\n"
        },
        {
          "title": "Success (200 OK) response sample (case of empty):",
          "content": "   HTTP/1.1 200 OK\n   {\n     \"objects\": [ ],\n     \"status\": 200\n   }\n"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "sources/Event.js"
  },
  {
    "type": "get",
    "url": "/events/:id/members/:id",
    "title": "Find an event member",
    "name": "FindEventMember",
    "group": "Events",
    "version": "0.0.0",
    "filename": "sources/Event.js"
  },
  {
    "type": "get",
    "url": "/events/:id/members",
    "title": "Find event members",
    "name": "FindEventMembers",
    "group": "Events",
    "version": "0.0.0",
    "filename": "sources/Event.js"
  },
  {
    "type": "get",
    "url": "/events/:id_event/products/:id_product",
    "title": "Find an event product",
    "name": "FindEventProduct",
    "group": "Events",
    "description": "<p>Find an event product<br/><b>Throw error:</b> 404</p>",
    "permission": {
      "name": "authenticated",
      "title": "Authentication requiered",
      "description": ""
    },
    "examples": [
      {
        "title": "Use example",
        "content": "get http://localhost/events/15/products/10\n"
      }
    ],
    "success": {
      "fields": {
        "Success (200 OK) response parameters": [
          {
            "group": "200",
            "type": "Object",
            "field": "object",
            "optional": false,
            "description": "<p>Requested object.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success (200 OK) response sample:",
          "content": "   HTTP/1.1 200 OK\n   {\n     \"object\": {\n        \"field1\": \"Foo\",\n        \"field2\": \"Bar\",\n        ...\n     },\n   }\n"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "sources/Event.js"
  },
  {
    "type": "get",
    "url": "/events/:id_event/products",
    "title": "Find event products",
    "name": "FindEventProducts",
    "group": "Events",
    "permission": {
      "name": "authenticated",
      "title": "Authentication requiered",
      "description": ""
    },
    "description": "<p>Find event products<br/><b>Throw error:</b> @todo</p>",
    "examples": [
      {
        "title": "Use example",
        "content": "get http://localhost/events/15/products\n"
      }
    ],
    "success": {
      "fields": {
        "Success (200 OK) response parameters": [
          {
            "group": "200",
            "type": "Object[]",
            "field": "objects",
            "optional": false,
            "description": "<p>The list of objects.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success (200 OK) response sample:",
          "content": "   HTTP/1.1 200 OK\n   {\n     \"objects\": [\n        \"object\": {\n            \"field1\": \"Foo\",\n            \"field2\": \"Bar\",\n            ...\n        },\n        ...\n     ],\n   }\n"
        },
        {
          "title": "Success (200 OK) response sample (case of empty):",
          "content": "   HTTP/1.1 200 OK\n   {\n     \"objects\": [ ],\n     \"status\": 200\n   }\n"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "sources/Event.js"
  },
  {
    "type": "get",
    "url": "/events",
    "title": "Find events",
    "name": "FindMultipleEvents",
    "group": "Events",
    "permission": {
      "name": "authenticated",
      "title": "Authentication requiered",
      "description": ""
    },
    "description": "<p>look for Events<br/><b>Throw error:</b></p>",
    "examples": [
      {
        "title": "Example ",
        "content": "get http://localhost/events\nget http://localhost/users?sort=asc&eventDate=204-12-24\n"
      }
    ],
    "parameter": {
      "fields": {
        "Parameters (URL)": [
          {
            "group": "urlParam",
            "type": "Number",
            "field": "id",
            "optional": true,
            "description": "<p>Use it to retrieve only one event with its ID.</p>"
          },
          {
            "group": "urlParam",
            "type": "String",
            "field": "eventName",
            "optional": true,
            "description": ""
          },
          {
            "group": "urlParam",
            "type": "String",
            "field": "eventDate",
            "optional": true,
            "description": ""
          },
          {
            "group": "urlParam",
            "type": "String",
            "field": "eventPlace",
            "optional": true,
            "description": ""
          },
          {
            "group": "urlParam",
            "type": "String",
            "field": "sort",
            "optional": true,
            "description": "<p>get the result sorted</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success (200 OK) response parameters": [
          {
            "group": "200",
            "type": "Object[]",
            "field": "objects",
            "optional": false,
            "description": "<p>The list of objects.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success (200 OK) response sample:",
          "content": "   HTTP/1.1 200 OK\n   {\n     \"objects\": [\n        \"object\": {\n            \"field1\": \"Foo\",\n            \"field2\": \"Bar\",\n            ...\n        },\n        ...\n     ],\n   }\n"
        },
        {
          "title": "Success (200 OK) response sample (case of empty):",
          "content": "   HTTP/1.1 200 OK\n   {\n     \"objects\": [ ],\n     \"status\": 200\n   }\n"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "sources/Event.js"
  },
  {
    "type": "put",
    "url": "/events",
    "title": "Update an event",
    "name": "UpdateEvent",
    "group": "Events",
    "permission": "authenticated eventOwner",
    "description": "<p>update an event<br/><b>Throw error:</b> 400.</p>",
    "parameter": {
      "fields": {
        "Parameters (Form Data)": [
          {
            "group": "dataParam",
            "type": "String",
            "field": "name",
            "optional": false,
            "description": ""
          },
          {
            "group": "dataParam",
            "type": "String",
            "field": "description",
            "optional": true,
            "description": "<p>A token is required to update password.</p>"
          },
          {
            "group": "dataParam",
            "type": "String",
            "field": "place",
            "optional": true,
            "description": "<p>Required token to update password.</p>"
          },
          {
            "group": "dataParam",
            "type": "String",
            "field": "date",
            "optional": false,
            "description": ""
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Use example",
        "content": "put http://localhost/events\nform-data: description=My_will_such_as_hell&place=toHome\n"
      }
    ],
    "success": {
      "fields": {
        "Success (200 OK) response parameters": [
          {
            "group": "200",
            "type": "Object",
            "field": "object",
            "optional": false,
            "description": "<p>The updated object.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success (200 OK) response sample:",
          "content": "HTTP/1.1 200 OK\n{\n   \"object\": {\n       \"field1\": \"Foo\",\n       \"field2\": \"Bar\",\n       ...\n   },\n}\n"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "sources/Event.js"
  },
  {
    "type": "put",
    "url": "/events/:idEvent/invitations/:idInvitation",
    "title": "Update an event invitation",
    "name": "UpdateEventInvitation",
    "group": "Events",
    "permission": {
      "name": "authenticated",
      "title": "Authentication requiered",
      "description": ""
    },
    "description": "<p>Update an invitation<br/><b>Throw error:</b> 404.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "field": "idEvent",
            "optional": false,
            "description": "<p>Event&#39;s ID</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "field": "idInvitation",
            "optional": false,
            "description": "<p>Invitation&#39;s ID</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Use example",
        "content": "put http://localhost/events/9/invitations/4\n"
      }
    ],
    "success": {
      "fields": {
        "Success (200 OK) response parameters": [
          {
            "group": "200",
            "type": "Object",
            "field": "object",
            "optional": false,
            "description": "<p>The updated object.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success (200 OK) response sample:",
          "content": "HTTP/1.1 200 OK\n{\n   \"object\": {\n       \"field1\": \"Foo\",\n       \"field2\": \"Bar\",\n       ...\n   },\n}\n"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "sources/Event.js"
  },
  {
    "parameter": {
      "fields": {
        "Parameters (URL)": [
          {
            "group": "urlParam",
            "type": "Number",
            "field": "id",
            "optional": true,
            "description": "<p>Use it to retrieve only one friendship with its ID.</p>"
          },
          {
            "group": "urlParam",
            "type": "String",
            "field": "state",
            "optional": true,
            "description": ""
          },
          {
            "group": "urlParam",
            "type": "String",
            "field": "createdDate",
            "optional": true,
            "description": ""
          },
          {
            "group": "urlParam",
            "type": "String",
            "field": "sort",
            "optional": true,
            "description": "<p>Sort results in differant way.</p>"
          }
        ]
      }
    },
    "group": "Friendship.js",
    "type": "",
    "url": "",
    "version": "0.0.0",
    "filename": "sources/Friendship.js"
  },
  {
    "type": "post",
    "url": "/users/:id/friendshipgroups/:id/members",
    "title": "Add a member to a group",
    "name": "AddUserGroupMember",
    "group": "Friendship_groups",
    "version": "0.0.0",
    "filename": "sources/FriendshipGroup.js"
  },
  {
    "type": "post",
    "url": "/users/:id/friendshipgroups",
    "title": "Create a user friends group",
    "name": "CreateUserGroup",
    "group": "Friendship_groups",
    "version": "0.0.0",
    "filename": "sources/FriendshipGroup.js"
  },
  {
    "type": "delete",
    "url": "/users/:id/friendshipgroups/:id",
    "title": "Delete a user friends group",
    "name": "DeleteUserGroup",
    "group": "Friendship_groups",
    "version": "0.0.0",
    "filename": "sources/FriendshipGroup.js"
  },
  {
    "type": "delete",
    "url": "/users/:id/friendshipgroups/:id/members/:id",
    "title": "Delete a member from a group",
    "name": "DeleteUserGroupMember",
    "group": "Friendship_groups",
    "version": "0.0.0",
    "filename": "sources/FriendshipGroup.js"
  },
  {
    "type": "get",
    "url": "/users/:id/friendshipgroups/:id",
    "title": "Find a user friends group",
    "name": "FindUserGroup",
    "group": "Friendship_groups",
    "version": "0.0.0",
    "filename": "sources/FriendshipGroup.js"
  },
  {
    "type": "get",
    "url": "/users/:id/friendshipgroups/:id",
    "title": "Find user friends groups",
    "name": "FindUserGroups",
    "group": "Friendship_groups",
    "version": "0.0.0",
    "filename": "sources/FriendshipGroup.js"
  },
  {
    "type": "put",
    "url": "/users/:id/friendshipgroups/:id",
    "title": "Update a user friends group",
    "name": "UpdateUserGroup",
    "group": "Friendship_groups",
    "version": "0.0.0",
    "filename": "sources/FriendshipGroup.js"
  },
  {
    "type": "post",
    "url": "/users/:id/friendships-request",
    "title": "Create a friendship request",
    "name": "CreateFriendship",
    "group": "Friendships",
    "permission": {
      "name": "authenticated",
      "title": "Authentication requiered",
      "description": ""
    },
    "description": "<p>Create one user friendships.<br/><b>Throw error:</b> 400.</p>",
    "parameter": {
      "fields": {
        "Parameters (Form Data)": [
          {
            "group": "dataParam",
            "type": "Number",
            "field": "target_id",
            "optional": false,
            "description": ""
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Use example",
        "content": "post http://localhost/users/15/friendships-request\nform-data: target_id=36\n"
      }
    ],
    "success": {
      "fields": {
        "Success (201 Created) response parameters": [
          {
            "group": "201",
            "type": "Object",
            "field": "object",
            "optional": false,
            "description": "<p>The created object.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success (201 Created) response sample:",
          "content": "HTTP/1.1 201 Created\n{\n   \"object\": {\n       \"field1\": \"Foo\",\n       \"field2\": \"Bar\",\n       ...\n   },\n}\n"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "sources/Friendship.js"
  },
  {
    "type": "delete",
    "url": "/users/:id_applicant/friendships/:id_target",
    "title": "Cancel a friendship",
    "name": "DeleteFriendship",
    "group": "Friendships",
    "version": "0.0.0",
    "filename": "sources/Friendship.js"
  },
  {
    "type": "delete",
    "url": "/users/:id/friendships-request/:id",
    "title": "Cancel a friendship request",
    "name": "DeleteFriendshipRequest",
    "group": "Friendships",
    "version": "0.0.0",
    "filename": "sources/Friendship.js"
  },
  {
    "type": "get",
    "url": "/users/:user_id/friendships-request/:id",
    "title": "Find a friendship request",
    "name": "FindFriendship",
    "group": "Friendships",
    "groupDescription": "<p>API relatives to friendships. Friendship are a relation between two user. These users are considered as friends. A friendship is not necessary valid.The friendship must be accepted by the target before being established, so the friendship can have several states like (waiting / cancelled / accepted / ...).</p>",
    "description": "<p>Allow to find a friendship by its ID<br/><b>Throw error:</b> 404</p>",
    "permission": "authenticated author",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "field": "user_id",
            "optional": false,
            "description": "<p>User&#39;s ID</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "field": "id",
            "optional": false,
            "description": "<p>Friendship&#39;s ID</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Use example",
        "content": "get http://localhost/users/15/friendships-request/25\n"
      }
    ],
    "success": {
      "fields": {
        "Success (200 OK) response parameters": [
          {
            "group": "200",
            "type": "Object",
            "field": "object",
            "optional": false,
            "description": "<p>Requested object.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success (200 OK) response sample:",
          "content": "   HTTP/1.1 200 OK\n   {\n     \"object\": {\n        \"field1\": \"Foo\",\n        \"field2\": \"Bar\",\n        ...\n     },\n   }\n"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "sources/Friendship.js"
  },
  {
    "type": "get",
    "url": "/users/:id/friendships-request",
    "title": "Find friendships requests",
    "name": "FindFriendships",
    "group": "Friendships",
    "permission": "authenticated author",
    "description": "<p>Fetch friendships<br/><b>Throw error:</b></p>",
    "examples": [
      {
        "title": "Use example",
        "content": "get /users/:id/friendships-request\nget /users/:id/friendships-request?sort=asc&state=accepted\n"
      }
    ],
    "parameter": {
      "fields": {
        "Parameters (URL)": [
          {
            "group": "urlParam",
            "type": "Number",
            "field": "id",
            "optional": true,
            "description": "<p>Use it to retrieve only one friendship with its ID.</p>"
          },
          {
            "group": "urlParam",
            "type": "String",
            "field": "state",
            "optional": true,
            "description": ""
          },
          {
            "group": "urlParam",
            "type": "String",
            "field": "createdDate",
            "optional": true,
            "description": ""
          },
          {
            "group": "urlParam",
            "type": "String",
            "field": "sort",
            "optional": true,
            "description": "<p>Sort results in differant way.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success (200 OK) response parameters": [
          {
            "group": "200",
            "type": "Object[]",
            "field": "objects",
            "optional": false,
            "description": "<p>The list of objects.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success (200 OK) response sample:",
          "content": "   HTTP/1.1 200 OK\n   {\n     \"objects\": [\n        \"object\": {\n            \"field1\": \"Foo\",\n            \"field2\": \"Bar\",\n            ...\n        },\n        ...\n     ],\n   }\n"
        },
        {
          "title": "Success (200 OK) response sample (case of empty):",
          "content": "   HTTP/1.1 200 OK\n   {\n     \"objects\": [ ],\n     \"status\": 200\n   }\n"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "sources/Friendship.js"
  },
  {
    "type": "get",
    "url": "users/:id/friends/:id",
    "title": "Find one user's friend",
    "name": "FindUserFriend",
    "group": "Friendships",
    "version": "0.0.0",
    "filename": "sources/Friendship.js"
  },
  {
    "type": "get",
    "url": "users/:id/friends",
    "title": "Find user's friends",
    "name": "FindUserFriends",
    "group": "Friendships",
    "version": "0.0.0",
    "filename": "sources/Friendship.js"
  },
  {
    "parameter": {
      "fields": {
        "Parameters (URL)": [
          {
            "group": "urlParam",
            "type": "Number",
            "field": "id",
            "optional": true,
            "description": ""
          },
          {
            "group": "urlParam",
            "type": "String",
            "field": "firstname",
            "optional": true,
            "description": ""
          },
          {
            "group": "urlParam",
            "type": "String",
            "field": "lastname",
            "optional": true,
            "description": ""
          },
          {
            "group": "urlParam",
            "type": "String",
            "field": "firstname_sort",
            "optional": true,
            "description": "<p>(asc/desc)</p>"
          }
        ]
      }
    },
    "group": "User.js",
    "type": "",
    "url": "",
    "version": "0.0.0",
    "filename": "sources/User.js"
  },
  {
    "type": "post",
    "url": "/users",
    "title": "Create one user",
    "name": "CreateUser",
    "group": "Users",
    "permission": {
      "name": "authenticated",
      "title": "Authentication requiered",
      "description": ""
    },
    "description": "<p>Create one user and retrieve the created object.<br/><b>Throw error:</b> 400, 409.</p>",
    "parameter": {
      "fields": {
        "Parameters (Form Data)": [
          {
            "group": "dataParam",
            "type": "String",
            "field": "email",
            "optional": false,
            "description": ""
          },
          {
            "group": "dataParam",
            "type": "String",
            "field": "password",
            "optional": false,
            "description": ""
          },
          {
            "group": "dataParam",
            "type": "String",
            "field": "firstname",
            "optional": true,
            "description": ""
          },
          {
            "group": "dataParam",
            "type": "String",
            "field": "lastname",
            "optional": true,
            "description": ""
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Use example",
        "content": "post http://localhost/users\nform-data: email=xmax54%40gmail.com&password=password\n"
      }
    ],
    "success": {
      "fields": {
        "Success (201 Created) response parameters": [
          {
            "group": "201",
            "type": "Object",
            "field": "object",
            "optional": false,
            "description": "<p>The created object.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success (201 Created) response sample:",
          "content": "HTTP/1.1 201 Created\n{\n   \"object\": {\n       \"field1\": \"Foo\",\n       \"field2\": \"Bar\",\n       ...\n   },\n}\n"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "sources/User.js"
  },
  {
    "type": "delete",
    "url": "/users/:id",
    "title": "Delete one user",
    "name": "DeleteUser",
    "group": "Users",
    "permission": "authenticated accountOwner",
    "description": "<p>Delete a user<br/><b>Throw error:</b> 404.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "field": "id",
            "optional": false,
            "description": "<p>User&#39;s ID</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Use example",
        "content": "delete http://localhost/users/15\n"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success (204 No content) response sample:",
          "content": "HTTP/1.1 204 No content\n{\n}\n"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "sources/User.js"
  },
  {
    "type": "get",
    "url": "/users",
    "title": "Find users",
    "name": "FindMultipleUsers",
    "group": "Users",
    "permission": {
      "name": "authenticated",
      "title": "Authentication requiered",
      "description": ""
    },
    "description": "<p>Fetch users<br/><b>Throw error:</b></p>",
    "examples": [
      {
        "title": "Use example",
        "content": "get http://localhost/users\nget http://localhost/users?sort=asc&firstname=maxime\n"
      }
    ],
    "parameter": {
      "fields": {
        "Parameters (URL)": [
          {
            "group": "urlParam",
            "type": "Number",
            "field": "id",
            "optional": true,
            "description": ""
          },
          {
            "group": "urlParam",
            "type": "String",
            "field": "firstname",
            "optional": true,
            "description": ""
          },
          {
            "group": "urlParam",
            "type": "String",
            "field": "lastname",
            "optional": true,
            "description": ""
          },
          {
            "group": "urlParam",
            "type": "String",
            "field": "firstname_sort",
            "optional": true,
            "description": "<p>(asc/desc)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success (200 OK) response parameters": [
          {
            "group": "200",
            "type": "Object[]",
            "field": "objects",
            "optional": false,
            "description": "<p>The list of objects.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success (200 OK) response sample:",
          "content": "   HTTP/1.1 200 OK\n   {\n     \"objects\": [\n        \"object\": {\n            \"field1\": \"Foo\",\n            \"field2\": \"Bar\",\n            ...\n        },\n        ...\n     ],\n   }\n"
        },
        {
          "title": "Success (200 OK) response sample (case of empty):",
          "content": "   HTTP/1.1 200 OK\n   {\n     \"objects\": [ ],\n     \"status\": 200\n   }\n"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "sources/User.js"
  },
  {
    "type": "get",
    "url": "/users/:id",
    "title": "Find one user",
    "name": "FindUser",
    "group": "Users",
    "groupDescription": "<p>API relatives to users</p>",
    "description": "<p>Find a user by its ID<br/><b>Throw error:</b> 404</p>",
    "permission": {
      "name": "authenticated",
      "title": "Authentication requiered",
      "description": ""
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "field": "id",
            "optional": false,
            "description": "<p>User&#39;s ID</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Use example",
        "content": "get http://localhost/users/15\n"
      }
    ],
    "success": {
      "fields": {
        "Success (200 OK) response parameters": [
          {
            "group": "200",
            "type": "Object",
            "field": "object",
            "optional": false,
            "description": "<p>Requested object.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success (200 OK) response sample:",
          "content": "   HTTP/1.1 200 OK\n   {\n     \"object\": {\n        \"field1\": \"Foo\",\n        \"field2\": \"Bar\",\n        ...\n     },\n   }\n"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "sources/User.js"
  },
  {
    "type": "patch",
    "url": "/users/:id",
    "title": "Generate user's password reset token",
    "name": "GenerateUserResetTokenPassword",
    "group": "Users",
    "permission": "authenticated accountOwner",
    "description": "<p><br/><b>Throw error:</b></p>",
    "parameter": {
      "fields": {
        "Parameters (Form Data)": [
          {
            "group": "formData",
            "type": "Boolean",
            "field": "reset_password",
            "optional": false,
            "description": "<p>true / false</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example d'utilisation",
        "content": "patch http://localhost/users/15\nform-data: reset_password=true\n"
      }
    ],
    "version": "0.0.0",
    "filename": "sources/User.js"
  },
  {
    "type": "put",
    "url": "/users",
    "title": "Update one user",
    "name": "UpdateUser",
    "group": "Users",
    "permission": "authenticated accountOwner",
    "description": "<p>Mets à jour un utilisateur et le récupère. Pour mettre à jour le mot de passe, une génération préalable d&#39;un token est requise.le token doit ensuite être spécifié dans la requete.<br/><b>Throw error:</b> 400.</p>",
    "parameter": {
      "fields": {
        "Parameters (Form Data)": [
          {
            "group": "dataParam",
            "type": "String",
            "field": "email",
            "optional": false,
            "description": ""
          },
          {
            "group": "dataParam",
            "type": "String",
            "field": "password",
            "optional": true,
            "description": "<p>A token is required to update password.</p>"
          },
          {
            "group": "dataParam",
            "type": "String",
            "field": "password_token",
            "optional": true,
            "description": "<p>Required token to update password.</p>"
          },
          {
            "group": "dataParam",
            "type": "String",
            "field": "firstname",
            "optional": true,
            "description": ""
          },
          {
            "group": "dataParam",
            "type": "String",
            "field": "lastname",
            "optional": true,
            "description": ""
          },
          {
            "group": "dataParam",
            "type": "String",
            "field": "preference_foo",
            "optional": true,
            "description": "<p>Change the preference foo</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Use example",
        "content": "put http://localhost/users\nform-data: email=xmax54%40gmail.com&firstname=pascal\n"
      }
    ],
    "success": {
      "fields": {
        "Success (200 OK) response parameters": [
          {
            "group": "200",
            "type": "Object",
            "field": "object",
            "optional": false,
            "description": "<p>The updated object.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success (200 OK) response sample:",
          "content": "HTTP/1.1 200 OK\n{\n   \"object\": {\n       \"field1\": \"Foo\",\n       \"field2\": \"Bar\",\n       ...\n   },\n}\n"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "sources/User.js"
  },
  {
    "error": {
      "examples": [
        {
          "title": "Error (500 Serveur Error) response sample:",
          "content": "   HTTP/1.1 500 Serveur Error\n   {\n     \"message\": \"Database unavailable\",\n     \"code\": \"dbUnavailable\"\n   }\n"
        }
      ]
    },
    "group": "_general.js",
    "type": "",
    "url": "",
    "version": "0.0.0",
    "filename": "sources/_general.js"
  },
  {
    "success": {
      "fields": {
        "Success (200 OK) response parameters": [
          {
            "group": "200",
            "type": "Object[]",
            "field": "objects",
            "optional": false,
            "description": "<p>The list of objects.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success (200 OK) response sample:",
          "content": "   HTTP/1.1 200 OK\n   {\n     \"objects\": [\n        \"object\": {\n            \"field1\": \"Foo\",\n            \"field2\": \"Bar\",\n            ...\n        },\n        ...\n     ],\n   }\n"
        },
        {
          "title": "Success (200 OK) response sample (case of empty):",
          "content": "   HTTP/1.1 200 OK\n   {\n     \"objects\": [ ],\n     \"status\": 200\n   }\n"
        }
      ]
    },
    "group": "_general.js",
    "type": "",
    "url": "",
    "version": "0.0.0",
    "filename": "sources/_general.js"
  },
  {
    "success": {
      "fields": {
        "Success (201 Created) response parameters": [
          {
            "group": "201",
            "type": "Object",
            "field": "object",
            "optional": false,
            "description": "<p>The created object.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success (201 Created) response sample:",
          "content": "HTTP/1.1 201 Created\n{\n   \"object\": {\n       \"field1\": \"Foo\",\n       \"field2\": \"Bar\",\n       ...\n   },\n}\n"
        }
      ]
    },
    "group": "_general.js",
    "type": "",
    "url": "",
    "version": "0.0.0",
    "filename": "sources/_general.js"
  },
  {
    "success": {
      "fields": {
        "Success (200 OK) response parameters": [
          {
            "group": "200",
            "type": "Object",
            "field": "object",
            "optional": false,
            "description": "<p>The updated object.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success (200 OK) response sample:",
          "content": "HTTP/1.1 200 OK\n{\n   \"object\": {\n       \"field1\": \"Foo\",\n       \"field2\": \"Bar\",\n       ...\n   },\n}\n"
        }
      ]
    },
    "group": "_general.js",
    "type": "",
    "url": "",
    "version": "0.0.0",
    "filename": "sources/_general.js"
  },
  {
    "success": {
      "examples": [
        {
          "title": "Success (204 No content) response sample:",
          "content": "HTTP/1.1 204 No content\n{\n}\n"
        }
      ]
    },
    "group": "_general.js",
    "type": "",
    "url": "",
    "version": "0.0.0",
    "filename": "sources/_general.js"
  },
  {
    "error": {
      "fields": {
        "Response attributes": [
          {
            "group": "errorResponse",
            "type": "String",
            "field": "message",
            "optional": false,
            "description": "<p>Error message.</p>"
          },
          {
            "group": "errorResponse",
            "type": "String",
            "field": "description",
            "optional": true,
            "description": "<p>More detailed error message.</p>"
          },
          {
            "group": "errorResponse",
            "type": "String",
            "field": "code",
            "optional": false,
            "description": "<p>Error code (Check the section above).</p>"
          },
          {
            "group": "errorResponse",
            "type": "Object[]",
            "field": "params",
            "optional": true,
            "description": "<p>The parameters the error relates to if the error is parameter-specific.</p>"
          },
          {
            "group": "errorResponse",
            "type": "Object[]",
            "field": "params.field",
            "optional": false,
            "description": "<p>The field name relatives to error.</p>"
          },
          {
            "group": "errorResponse",
            "type": "Object[]",
            "field": "params.code",
            "optional": false,
            "description": "<p>The code error.</p>"
          },
          {
            "group": "errorResponse",
            "type": "Object[]",
            "field": "params.message",
            "optional": false,
            "description": "<p>.</p>"
          },
          {
            "group": "errorResponse",
            "type": "Object[]",
            "field": "params.description",
            "optional": true,
            "description": "<p>.</p>"
          }
        ]
      }
    },
    "group": "_general.js",
    "type": "",
    "url": "",
    "version": "0.0.0",
    "filename": "sources/_general.js"
  },
  {
    "error": {
      "examples": [
        {
          "title": "Error (400 Bad request) response sample (case of parameters validation failed):",
          "content": "   HTTP/1.1 400 BAD REQUEST\n   {\n     \"message\": \"The requested parameters are not correct\",\n     \"code\": \"invalidParams\"\n     \"params\": [\n        {\n          \"message\": \"This field should contain at least 4 characters\",\n          \"code\": \"fieldTooShort\"\n          \"field\": \"foo\"\n        },\n        ...\n     ],\n   }\n"
        }
      ]
    },
    "group": "_general.js",
    "type": "",
    "url": "",
    "version": "0.0.0",
    "filename": "sources/_general.js"
  },
  {
    "error": {
      "examples": [
        {
          "title": "Error (404 Not Found) response sample:",
          "content": "   HTTP/1.1 404 Not Found\n   {\n     \"message\": \"This user doesn't exist\",\n     \"code\": \"modelNotFound\"\n   }\n"
        }
      ]
    },
    "group": "_general.js",
    "type": "",
    "url": "",
    "version": "0.0.0",
    "filename": "sources/_general.js"
  },
  {
    "error": {
      "examples": [
        {
          "title": "Error (401 Unauthorized Error) response sample (case of authentication parameters are missing):",
          "content": "   HTTP/1.1 401 Unauthorized Error\n   {\n     \"message\": \"You are not authorized\",\n     \"code\": \"unauthorized\"\n   }\n"
        }
      ]
    },
    "group": "_general.js",
    "type": "",
    "url": "",
    "version": "0.0.0",
    "filename": "sources/_general.js"
  },
  {
    "error": {
      "examples": [
        {
          "title": "Error (403 Forbidden Error) response sample:",
          "content": "   HTTP/1.1 403 Forbidden Error\n   {\n     \"message\": \"You do not have enough rights to access this resource\",\n     \"code\": \"noAccessRights\"\n   }\n"
        }
      ]
    },
    "group": "_general.js",
    "type": "",
    "url": "",
    "version": "0.0.0",
    "filename": "sources/_general.js"
  },
  {
    "error": {
      "examples": [
        {
          "title": "Error (409 Conflict Error) response sample:",
          "content": "   HTTP/1.1 409 Conflict Error\n   {\n     \"message\": \"Email already taken\",\n     \"description\": \"foo\",\n     \"code\": \"emailArleadyTaken\"\n   }\n"
        }
      ]
    },
    "group": "_general.js",
    "type": "",
    "url": "",
    "version": "0.0.0",
    "filename": "sources/_general.js"
  },
  {
    "success": {
      "fields": {
        "Success (200 OK) response parameters": [
          {
            "group": "200",
            "type": "Object",
            "field": "object",
            "optional": false,
            "description": "<p>Requested object.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success (200 OK) response sample:",
          "content": "   HTTP/1.1 200 OK\n   {\n     \"object\": {\n        \"field1\": \"Foo\",\n        \"field2\": \"Bar\",\n        ...\n     },\n   }\n"
        }
      ]
    },
    "group": "_general.js",
    "type": "",
    "url": "",
    "version": "0.0.0",
    "filename": "sources/_general.js"
  }
] });