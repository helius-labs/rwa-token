export type DataRegistry = {
  "version": "0.0.1",
  "name": "data_registry",
  "instructions": [
    {
      "name": "createDataRegistry",
      "docs": [
        "registry functions",
        "create data registry"
      ],
      "accounts": [
        {
          "name": "payer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "assetMint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "dataRegistry",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "authority",
          "type": "publicKey"
        },
        {
          "name": "delegate",
          "type": {
            "option": "publicKey"
          }
        }
      ]
    },
    {
      "name": "delegateDataRegsitry",
      "docs": [
        "delegate data registry"
      ],
      "accounts": [
        {
          "name": "payer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "authority",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "dataRegistry",
          "isMut": true,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "delegate",
          "type": "publicKey"
        }
      ]
    },
    {
      "name": "createDataAccount",
      "docs": [
        "data functions",
        "create data account"
      ],
      "accounts": [
        {
          "name": "payer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "signer",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "dataRegistry",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "dataAccount",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "args",
          "type": {
            "defined": "CreateDataAccountArgs"
          }
        }
      ]
    },
    {
      "name": "updateDataAccount",
      "docs": [
        "update data account"
      ],
      "accounts": [
        {
          "name": "payer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "signer",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "dataRegistry",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "dataAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "args",
          "type": {
            "defined": "UpdateDataAccountArgs"
          }
        }
      ]
    }
  ],
  "accounts": [
    {
      "name": "dataRegistry",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "version",
            "type": "u8"
          },
          {
            "name": "assetMint",
            "type": "publicKey"
          },
          {
            "name": "authority",
            "docs": [
              "can sign creation of new data accounts",
              "can update delegate",
              "can update data account authority"
            ],
            "type": "publicKey"
          },
          {
            "name": "delegate",
            "docs": [
              "can sign creation of new data accounts, can be used if a different org needs to issue data accounts"
            ],
            "type": "publicKey"
          }
        ]
      }
    },
    {
      "name": "dataAccount",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "version",
            "type": "u8"
          },
          {
            "name": "dataRegistry",
            "docs": [
              "registry to which data account belongs to"
            ],
            "type": "publicKey"
          },
          {
            "name": "type",
            "docs": [
              "type of the data account"
            ],
            "type": {
              "defined": "DataAccountType"
            }
          },
          {
            "name": "name",
            "docs": [
              "used by creator to store name of the document"
            ],
            "type": "string"
          },
          {
            "name": "uri",
            "docs": [
              "uri pointing to the data stored in the document"
            ],
            "type": "string"
          }
        ]
      }
    }
  ],
  "types": [
    {
      "name": "CreateDataAccountArgs",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "type",
            "type": {
              "defined": "DataAccountType"
            }
          },
          {
            "name": "name",
            "type": "string"
          },
          {
            "name": "uri",
            "type": "string"
          }
        ]
      }
    },
    {
      "name": "UpdateDataAccountArgs",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "type",
            "type": {
              "defined": "DataAccountType"
            }
          },
          {
            "name": "name",
            "type": "string"
          },
          {
            "name": "uri",
            "type": "string"
          }
        ]
      }
    },
    {
      "name": "DataAccountType",
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "Title"
          },
          {
            "name": "Legal"
          },
          {
            "name": "Tax"
          },
          {
            "name": "Miscellaneous"
          }
        ]
      }
    }
  ],
  "errors": [
    {
      "code": 6000,
      "name": "UnauthorizedSigner",
      "msg": "The signer is not authorized to perform this action"
    }
  ]
};

export const IDL: DataRegistry = {
  "version": "0.0.1",
  "name": "data_registry",
  "instructions": [
    {
      "name": "createDataRegistry",
      "docs": [
        "registry functions",
        "create data registry"
      ],
      "accounts": [
        {
          "name": "payer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "assetMint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "dataRegistry",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "authority",
          "type": "publicKey"
        },
        {
          "name": "delegate",
          "type": {
            "option": "publicKey"
          }
        }
      ]
    },
    {
      "name": "delegateDataRegsitry",
      "docs": [
        "delegate data registry"
      ],
      "accounts": [
        {
          "name": "payer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "authority",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "dataRegistry",
          "isMut": true,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "delegate",
          "type": "publicKey"
        }
      ]
    },
    {
      "name": "createDataAccount",
      "docs": [
        "data functions",
        "create data account"
      ],
      "accounts": [
        {
          "name": "payer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "signer",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "dataRegistry",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "dataAccount",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "args",
          "type": {
            "defined": "CreateDataAccountArgs"
          }
        }
      ]
    },
    {
      "name": "updateDataAccount",
      "docs": [
        "update data account"
      ],
      "accounts": [
        {
          "name": "payer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "signer",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "dataRegistry",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "dataAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "args",
          "type": {
            "defined": "UpdateDataAccountArgs"
          }
        }
      ]
    }
  ],
  "accounts": [
    {
      "name": "dataRegistry",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "version",
            "type": "u8"
          },
          {
            "name": "assetMint",
            "type": "publicKey"
          },
          {
            "name": "authority",
            "docs": [
              "can sign creation of new data accounts",
              "can update delegate",
              "can update data account authority"
            ],
            "type": "publicKey"
          },
          {
            "name": "delegate",
            "docs": [
              "can sign creation of new data accounts, can be used if a different org needs to issue data accounts"
            ],
            "type": "publicKey"
          }
        ]
      }
    },
    {
      "name": "dataAccount",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "version",
            "type": "u8"
          },
          {
            "name": "dataRegistry",
            "docs": [
              "registry to which data account belongs to"
            ],
            "type": "publicKey"
          },
          {
            "name": "type",
            "docs": [
              "type of the data account"
            ],
            "type": {
              "defined": "DataAccountType"
            }
          },
          {
            "name": "name",
            "docs": [
              "used by creator to store name of the document"
            ],
            "type": "string"
          },
          {
            "name": "uri",
            "docs": [
              "uri pointing to the data stored in the document"
            ],
            "type": "string"
          }
        ]
      }
    }
  ],
  "types": [
    {
      "name": "CreateDataAccountArgs",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "type",
            "type": {
              "defined": "DataAccountType"
            }
          },
          {
            "name": "name",
            "type": "string"
          },
          {
            "name": "uri",
            "type": "string"
          }
        ]
      }
    },
    {
      "name": "UpdateDataAccountArgs",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "type",
            "type": {
              "defined": "DataAccountType"
            }
          },
          {
            "name": "name",
            "type": "string"
          },
          {
            "name": "uri",
            "type": "string"
          }
        ]
      }
    },
    {
      "name": "DataAccountType",
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "Title"
          },
          {
            "name": "Legal"
          },
          {
            "name": "Tax"
          },
          {
            "name": "Miscellaneous"
          }
        ]
      }
    }
  ],
  "errors": [
    {
      "code": 6000,
      "name": "UnauthorizedSigner",
      "msg": "The signer is not authorized to perform this action"
    }
  ]
};
