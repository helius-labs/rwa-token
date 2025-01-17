export type PolicyEngine = {
  "version": "0.0.1",
  "name": "policy_engine",
  "instructions": [
    {
      "name": "createPolicyEngine",
      "docs": [
        "create a policy registry"
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
          "name": "policyEngine",
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
      "name": "attachIdentityApproval",
      "docs": [
        "attach policies",
        "attach a transaction count limit policy"
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
          "name": "policyEngine",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "policy",
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
          "name": "identityFilter",
          "type": {
            "defined": "IdentityFilter"
          }
        }
      ]
    },
    {
      "name": "attachTransactionAmountLimit",
      "docs": [
        "attach a transaction amount limit policy"
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
          "name": "policyEngine",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "policy",
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
          "name": "limit",
          "type": "u64"
        },
        {
          "name": "identityFilter",
          "type": {
            "defined": "IdentityFilter"
          }
        }
      ]
    },
    {
      "name": "attachTransactionAmountVelocity",
      "docs": [
        "attach a transaction amount velocity policy"
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
          "name": "policyEngine",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "policy",
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
          "name": "limit",
          "type": "u64"
        },
        {
          "name": "timeframe",
          "type": "i64"
        },
        {
          "name": "identityFilter",
          "type": {
            "defined": "IdentityFilter"
          }
        }
      ]
    },
    {
      "name": "attachTransactionCountVelocity",
      "docs": [
        "attach a transaction count velocity policy"
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
          "name": "policyEngine",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "policy",
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
          "name": "limit",
          "type": "u64"
        },
        {
          "name": "timeframe",
          "type": "i64"
        },
        {
          "name": "identityFilter",
          "type": {
            "defined": "IdentityFilter"
          }
        }
      ]
    },
    {
      "name": "removePolicy",
      "docs": [
        "remove policy"
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
          "isSigner": true
        },
        {
          "name": "policyEngine",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "policy",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    }
  ],
  "accounts": [
    {
      "name": "identityApproval",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "version",
            "type": "u8"
          },
          {
            "name": "identityFilter",
            "type": {
              "defined": "IdentityFilter"
            }
          }
        ]
      }
    },
    {
      "name": "transactionAmountLimit",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "version",
            "type": "u8"
          },
          {
            "name": "limit",
            "type": "u64"
          },
          {
            "name": "identityFilter",
            "type": {
              "defined": "IdentityFilter"
            }
          }
        ]
      }
    },
    {
      "name": "transactionAmountVelocity",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "version",
            "type": "u8"
          },
          {
            "name": "limit",
            "type": "u64"
          },
          {
            "name": "timeframe",
            "type": "i64"
          },
          {
            "name": "identityFilter",
            "type": {
              "defined": "IdentityFilter"
            }
          }
        ]
      }
    },
    {
      "name": "transactionCountVelocity",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "version",
            "type": "u8"
          },
          {
            "name": "limit",
            "type": "u64"
          },
          {
            "name": "timeframe",
            "type": "i64"
          },
          {
            "name": "identityFilter",
            "type": {
              "defined": "IdentityFilter"
            }
          }
        ]
      }
    },
    {
      "name": "policyEngine",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "version",
            "docs": [
              "version"
            ],
            "type": "u8"
          },
          {
            "name": "assetMint",
            "docs": [
              "asset mint"
            ],
            "type": "publicKey"
          },
          {
            "name": "authority",
            "docs": [
              "authority of the registry"
            ],
            "type": "publicKey"
          },
          {
            "name": "delegate",
            "docs": [
              "policy delegate"
            ],
            "type": "publicKey"
          },
          {
            "name": "maxTimeframe",
            "docs": [
              "max timeframe of all the policies"
            ],
            "type": "i64"
          },
          {
            "name": "policies",
            "docs": [
              "list of all policies"
            ],
            "type": {
              "array": [
                "publicKey",
                10
              ]
            }
          }
        ]
      }
    }
  ],
  "types": [
    {
      "name": "IdentityFilter",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "identityLevels",
            "type": "bytes"
          },
          {
            "name": "comparisionType",
            "type": "u8"
          }
        ]
      }
    },
    {
      "name": "ComparisionType",
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "And"
          },
          {
            "name": "Or"
          }
        ]
      }
    },
    {
      "name": "PolicyType",
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "IdentityApproval"
          },
          {
            "name": "TransactionCountVelocity"
          },
          {
            "name": "TransactionAmountVelocity"
          },
          {
            "name": "TransactionAmountLimit"
          }
        ]
      }
    }
  ],
  "errors": [
    {
      "code": 6000,
      "name": "InvalidPolicy",
      "msg": "Invalid policy passed"
    },
    {
      "code": 6001,
      "name": "TransactionAmountLimitExceeded",
      "msg": "Transaction amount limit exceeded"
    },
    {
      "code": 6002,
      "name": "TransactionAmountVelocityExceeded",
      "msg": "Transaction amount velocity exceeded"
    },
    {
      "code": 6003,
      "name": "TransactionCountVelocityExceeded",
      "msg": "Transaction count velocity exceeded"
    },
    {
      "code": 6004,
      "name": "PolicyEngineFull",
      "msg": "Policy registry is full, cannot add more policies"
    },
    {
      "code": 6005,
      "name": "PolicyNotFound",
      "msg": "Policy not found"
    },
    {
      "code": 6006,
      "name": "IdentityFilterFailed",
      "msg": "Identity filter failed"
    },
    {
      "code": 6007,
      "name": "UnauthorizedSigner",
      "msg": "Unauthorized signer"
    }
  ]
};

export const IDL: PolicyEngine = {
  "version": "0.0.1",
  "name": "policy_engine",
  "instructions": [
    {
      "name": "createPolicyEngine",
      "docs": [
        "create a policy registry"
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
          "name": "policyEngine",
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
      "name": "attachIdentityApproval",
      "docs": [
        "attach policies",
        "attach a transaction count limit policy"
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
          "name": "policyEngine",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "policy",
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
          "name": "identityFilter",
          "type": {
            "defined": "IdentityFilter"
          }
        }
      ]
    },
    {
      "name": "attachTransactionAmountLimit",
      "docs": [
        "attach a transaction amount limit policy"
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
          "name": "policyEngine",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "policy",
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
          "name": "limit",
          "type": "u64"
        },
        {
          "name": "identityFilter",
          "type": {
            "defined": "IdentityFilter"
          }
        }
      ]
    },
    {
      "name": "attachTransactionAmountVelocity",
      "docs": [
        "attach a transaction amount velocity policy"
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
          "name": "policyEngine",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "policy",
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
          "name": "limit",
          "type": "u64"
        },
        {
          "name": "timeframe",
          "type": "i64"
        },
        {
          "name": "identityFilter",
          "type": {
            "defined": "IdentityFilter"
          }
        }
      ]
    },
    {
      "name": "attachTransactionCountVelocity",
      "docs": [
        "attach a transaction count velocity policy"
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
          "name": "policyEngine",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "policy",
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
          "name": "limit",
          "type": "u64"
        },
        {
          "name": "timeframe",
          "type": "i64"
        },
        {
          "name": "identityFilter",
          "type": {
            "defined": "IdentityFilter"
          }
        }
      ]
    },
    {
      "name": "removePolicy",
      "docs": [
        "remove policy"
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
          "isSigner": true
        },
        {
          "name": "policyEngine",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "policy",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    }
  ],
  "accounts": [
    {
      "name": "identityApproval",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "version",
            "type": "u8"
          },
          {
            "name": "identityFilter",
            "type": {
              "defined": "IdentityFilter"
            }
          }
        ]
      }
    },
    {
      "name": "transactionAmountLimit",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "version",
            "type": "u8"
          },
          {
            "name": "limit",
            "type": "u64"
          },
          {
            "name": "identityFilter",
            "type": {
              "defined": "IdentityFilter"
            }
          }
        ]
      }
    },
    {
      "name": "transactionAmountVelocity",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "version",
            "type": "u8"
          },
          {
            "name": "limit",
            "type": "u64"
          },
          {
            "name": "timeframe",
            "type": "i64"
          },
          {
            "name": "identityFilter",
            "type": {
              "defined": "IdentityFilter"
            }
          }
        ]
      }
    },
    {
      "name": "transactionCountVelocity",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "version",
            "type": "u8"
          },
          {
            "name": "limit",
            "type": "u64"
          },
          {
            "name": "timeframe",
            "type": "i64"
          },
          {
            "name": "identityFilter",
            "type": {
              "defined": "IdentityFilter"
            }
          }
        ]
      }
    },
    {
      "name": "policyEngine",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "version",
            "docs": [
              "version"
            ],
            "type": "u8"
          },
          {
            "name": "assetMint",
            "docs": [
              "asset mint"
            ],
            "type": "publicKey"
          },
          {
            "name": "authority",
            "docs": [
              "authority of the registry"
            ],
            "type": "publicKey"
          },
          {
            "name": "delegate",
            "docs": [
              "policy delegate"
            ],
            "type": "publicKey"
          },
          {
            "name": "maxTimeframe",
            "docs": [
              "max timeframe of all the policies"
            ],
            "type": "i64"
          },
          {
            "name": "policies",
            "docs": [
              "list of all policies"
            ],
            "type": {
              "array": [
                "publicKey",
                10
              ]
            }
          }
        ]
      }
    }
  ],
  "types": [
    {
      "name": "IdentityFilter",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "identityLevels",
            "type": "bytes"
          },
          {
            "name": "comparisionType",
            "type": "u8"
          }
        ]
      }
    },
    {
      "name": "ComparisionType",
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "And"
          },
          {
            "name": "Or"
          }
        ]
      }
    },
    {
      "name": "PolicyType",
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "IdentityApproval"
          },
          {
            "name": "TransactionCountVelocity"
          },
          {
            "name": "TransactionAmountVelocity"
          },
          {
            "name": "TransactionAmountLimit"
          }
        ]
      }
    }
  ],
  "errors": [
    {
      "code": 6000,
      "name": "InvalidPolicy",
      "msg": "Invalid policy passed"
    },
    {
      "code": 6001,
      "name": "TransactionAmountLimitExceeded",
      "msg": "Transaction amount limit exceeded"
    },
    {
      "code": 6002,
      "name": "TransactionAmountVelocityExceeded",
      "msg": "Transaction amount velocity exceeded"
    },
    {
      "code": 6003,
      "name": "TransactionCountVelocityExceeded",
      "msg": "Transaction count velocity exceeded"
    },
    {
      "code": 6004,
      "name": "PolicyEngineFull",
      "msg": "Policy registry is full, cannot add more policies"
    },
    {
      "code": 6005,
      "name": "PolicyNotFound",
      "msg": "Policy not found"
    },
    {
      "code": 6006,
      "name": "IdentityFilterFailed",
      "msg": "Identity filter failed"
    },
    {
      "code": 6007,
      "name": "UnauthorizedSigner",
      "msg": "Unauthorized signer"
    }
  ]
};
