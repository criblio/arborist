// generated from test/fixtures/testing-peer-deps-nested
module.exports = t => {
  const path = t.testdir({
  "package-lock.json": JSON.stringify({
    "name": "testing-peer-deps-nested",
    "version": "1.0.0",
    "lockfileVersion": 2,
    "requires": true,
    "packages": {
      "": {
        "name": "testing-peer-deps-nested",
        "version": "1.0.0",
        "license": "ISC",
        "dependencies": {
          "@isaacs/testing-peer-deps": "2 || 3"
        }
      },
      "node_modules/@isaacs/testing-peer-deps": {
        "name": "@isaacs/testing-peer-deps",
        "version": "2.0.0",
        "resolved": "https://registry.npmjs.org/@isaacs/testing-peer-deps/-/testing-peer-deps-2.0.0.tgz",
        "integrity": "sha512-4urwrUZGQ948uZfnIeY2nuYOGrh6eBhMpIvJo6KTTdG8ys25NylqN3MmeXdraXTQLr7vb3UrPq1pVL6h9vkuvA==",
        "dependencies": {
          "@isaacs/testing-peer-deps-a": "1",
          "@isaacs/testing-peer-deps-d": "2"
        }
      },
      "node_modules/@isaacs/testing-peer-deps-a": {
        "name": "@isaacs/testing-peer-deps-a",
        "version": "1.2.4",
        "resolved": "https://registry.npmjs.org/@isaacs/testing-peer-deps-a/-/testing-peer-deps-a-1.2.4.tgz",
        "integrity": "sha512-AZh6hYg/RYoS8Ea59JUOxYKS8Tg/95kW5hiZHyhpB/eg4hDllp6dAedxTvZzJN68aKpvA4YYuqodMtdzUinNPQ==",
        "peerDependencies": {
          "@isaacs/testing-peer-deps-b": "1"
        }
      },
      "node_modules/@isaacs/testing-peer-deps-b": {
        "name": "@isaacs/testing-peer-deps-b",
        "version": "1.2.4",
        "resolved": "https://registry.npmjs.org/@isaacs/testing-peer-deps-b/-/testing-peer-deps-b-1.2.4.tgz",
        "integrity": "sha512-7rfmqBPEKWlRnU+o495Cynlc1A3MxFf+rNEIdXYRawM3lU6RzY7BX2nOtQsEE4uIKnqbEJR5uj7XaR5RWFmcBw==",
        "peerDependencies": {
          "@isaacs/testing-peer-deps-c": "1"
        }
      },
      "node_modules/@isaacs/testing-peer-deps-c": {
        "name": "@isaacs/testing-peer-deps-c",
        "version": "1.2.3",
        "resolved": "https://registry.npmjs.org/@isaacs/testing-peer-deps-c/-/testing-peer-deps-c-1.2.3.tgz",
        "integrity": "sha512-sq2Bc2XsWCrvCm1Hw+hVEd9oadnsb7T/91v3OwtLx0KMqinj6ncn6p4uixsB6dZuC+sHJlFHZjbnB4crfeVSgw=="
      },
      "node_modules/@isaacs/testing-peer-deps-d": {
        "name": "@isaacs/testing-peer-deps-d",
        "version": "2.0.0",
        "resolved": "https://registry.npmjs.org/@isaacs/testing-peer-deps-d/-/testing-peer-deps-d-2.0.0.tgz",
        "integrity": "sha512-uVdlNNBv6K1Cqo9NeCCX6Byv5WobrWpAgW3I9FnyVb3w2M7Q7kds+zvcXn5tDY+VzKUqFH/JcrKmSXRo7Jt2xQ==",
        "dependencies": {
          "@isaacs/testing-peer-deps-a": "2"
        }
      },
      "node_modules/@isaacs/testing-peer-deps-d/node_modules/@isaacs/testing-peer-deps-a": {
        "name": "@isaacs/testing-peer-deps-a",
        "version": "2.0.0",
        "resolved": "https://registry.npmjs.org/@isaacs/testing-peer-deps-a/-/testing-peer-deps-a-2.0.0.tgz",
        "integrity": "sha512-jpHyXoPZrCrwuiZjZPd5PU0tsgVAnpCVGpR772ZhF5B93GGfTlhKdi06Ev7gVaqQnTkV9gk6xKS/loJfRmAzTw==",
        "peerDependencies": {
          "@isaacs/testing-peer-deps-b": "2"
        }
      },
      "node_modules/@isaacs/testing-peer-deps-d/node_modules/@isaacs/testing-peer-deps-b": {
        "name": "@isaacs/testing-peer-deps-b",
        "version": "2.0.1",
        "resolved": "https://registry.npmjs.org/@isaacs/testing-peer-deps-b/-/testing-peer-deps-b-2.0.1.tgz",
        "integrity": "sha512-sgYGXt0YwVLZ31DZKgoQm7JHEETS71GE2x9g1RIqQ1xarGFfGyor2sF3ekxUOeaE/4FInrh+K+nUP5YgPXLBQQ==",
        "peerDependencies": {
          "@isaacs/testing-peer-deps-c": "2"
        }
      },
      "node_modules/@isaacs/testing-peer-deps-d/node_modules/@isaacs/testing-peer-deps-c": {
        "name": "@isaacs/testing-peer-deps-c",
        "version": "2.0.0",
        "resolved": "https://registry.npmjs.org/@isaacs/testing-peer-deps-c/-/testing-peer-deps-c-2.0.0.tgz",
        "integrity": "sha512-ixTvB2pyv08B5pLskjuuM/w/+U6/oHFNtaZbnqbyl1HUZrm9LbBhL5rNCQCddXLwds0beiin9ue4dPyq9dUjDw=="
      }
    },
    "dependencies": {
      "@isaacs/testing-peer-deps": {
        "version": "2.0.0",
        "resolved": "https://registry.npmjs.org/@isaacs/testing-peer-deps/-/testing-peer-deps-2.0.0.tgz",
        "integrity": "sha512-4urwrUZGQ948uZfnIeY2nuYOGrh6eBhMpIvJo6KTTdG8ys25NylqN3MmeXdraXTQLr7vb3UrPq1pVL6h9vkuvA==",
        "requires": {
          "@isaacs/testing-peer-deps-a": "1",
          "@isaacs/testing-peer-deps-d": "2"
        }
      },
      "@isaacs/testing-peer-deps-a": {
        "version": "1.2.4",
        "resolved": "https://registry.npmjs.org/@isaacs/testing-peer-deps-a/-/testing-peer-deps-a-1.2.4.tgz",
        "integrity": "sha512-AZh6hYg/RYoS8Ea59JUOxYKS8Tg/95kW5hiZHyhpB/eg4hDllp6dAedxTvZzJN68aKpvA4YYuqodMtdzUinNPQ==",
        "requires": {
          "@isaacs/testing-peer-deps-b": "1"
        }
      },
      "@isaacs/testing-peer-deps-b": {
        "version": "1.2.4",
        "resolved": "https://registry.npmjs.org/@isaacs/testing-peer-deps-b/-/testing-peer-deps-b-1.2.4.tgz",
        "integrity": "sha512-7rfmqBPEKWlRnU+o495Cynlc1A3MxFf+rNEIdXYRawM3lU6RzY7BX2nOtQsEE4uIKnqbEJR5uj7XaR5RWFmcBw==",
        "requires": {
          "@isaacs/testing-peer-deps-c": "1"
        }
      },
      "@isaacs/testing-peer-deps-c": {
        "version": "1.2.3",
        "resolved": "https://registry.npmjs.org/@isaacs/testing-peer-deps-c/-/testing-peer-deps-c-1.2.3.tgz",
        "integrity": "sha512-sq2Bc2XsWCrvCm1Hw+hVEd9oadnsb7T/91v3OwtLx0KMqinj6ncn6p4uixsB6dZuC+sHJlFHZjbnB4crfeVSgw=="
      },
      "@isaacs/testing-peer-deps-d": {
        "version": "2.0.0",
        "resolved": "https://registry.npmjs.org/@isaacs/testing-peer-deps-d/-/testing-peer-deps-d-2.0.0.tgz",
        "integrity": "sha512-uVdlNNBv6K1Cqo9NeCCX6Byv5WobrWpAgW3I9FnyVb3w2M7Q7kds+zvcXn5tDY+VzKUqFH/JcrKmSXRo7Jt2xQ==",
        "requires": {
          "@isaacs/testing-peer-deps-a": "2"
        },
        "dependencies": {
          "@isaacs/testing-peer-deps-a": {
            "version": "2.0.0",
            "resolved": "https://registry.npmjs.org/@isaacs/testing-peer-deps-a/-/testing-peer-deps-a-2.0.0.tgz",
            "integrity": "sha512-jpHyXoPZrCrwuiZjZPd5PU0tsgVAnpCVGpR772ZhF5B93GGfTlhKdi06Ev7gVaqQnTkV9gk6xKS/loJfRmAzTw==",
            "requires": {
              "@isaacs/testing-peer-deps-b": "2"
            }
          },
          "@isaacs/testing-peer-deps-b": {
            "version": "2.0.1",
            "resolved": "https://registry.npmjs.org/@isaacs/testing-peer-deps-b/-/testing-peer-deps-b-2.0.1.tgz",
            "integrity": "sha512-sgYGXt0YwVLZ31DZKgoQm7JHEETS71GE2x9g1RIqQ1xarGFfGyor2sF3ekxUOeaE/4FInrh+K+nUP5YgPXLBQQ==",
            "requires": {
              "@isaacs/testing-peer-deps-c": "2"
            }
          },
          "@isaacs/testing-peer-deps-c": {
            "version": "2.0.0",
            "resolved": "https://registry.npmjs.org/@isaacs/testing-peer-deps-c/-/testing-peer-deps-c-2.0.0.tgz",
            "integrity": "sha512-ixTvB2pyv08B5pLskjuuM/w/+U6/oHFNtaZbnqbyl1HUZrm9LbBhL5rNCQCddXLwds0beiin9ue4dPyq9dUjDw=="
          }
        }
      }
    }
  }),
  "package.json": JSON.stringify({
    "name": "testing-peer-deps-nested",
    "version": "1.0.0",
    "license": "ISC",
    "dependencies": {
      "@isaacs/testing-peer-deps": "2 || 3"
    }
  })
})
  return path
}
