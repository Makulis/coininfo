var common = {
  name: 'Neblio',
  unit: 'NEBL'
}

var main = Object.assign({}, {
  hashGenesisBlock: '0x7286972be4dbc1463d256049b7471c252e6557e222cab9be73181d359cd28bcc ',
  messagePrefix: '\x18Neblio Signed Message:\n',
  port: 6325,
  protocol: {
    magic: 0x325e6f86
  },
  seedsDns: [
    'seed.nebl.io'
  ],
  versions: {
    bip32: {
      private: 0x0488ade4,
      public: 0x0488b21e
    },
    bip44: 0,
    private: 0xb5,
    public: 0x35,
    scripthash: 0x70,
  }
}, common)

var test = Object.assign({}, {
  hashGenesisBlock: '0x7286972be4dbc1463d256049b7471c252e6557e222cab9be73181d359cd28bcc',
  messagePrefix: '\x18Neblio Signed Message:\n',
  port: 16325,
  protocol: {
    magic: 0x325e6f86
  },
  seedsDns: [
    'nebliodseed1.nebl.io',
    'nebliodseed2.nebl.io'
  ],
  versions: {
    bip32: {
      private: 0x04358394,
      public: 0x043587cf
    },
    bip44: 1,
    private: 0xc1,
    public: 0x41,
    scripthash: 0x7f,
  }
}, common)


module.exports = {
  main: main,
  test: test
}
