const exampleProposal = {
  body: {
    address: '0xDd919FecF317d05d49324757724FabceF040cd58',
    msg: {
      version: '0.1.2',
      timestamp: '1600848091',
      token: '0xAba8cAc6866B83Ae4eec97DD07ED254282f6aD8A',
      type: 'proposal',
      payload: {
        name: 'Keep only YAMv3 for growth, and end YAMv1 and YAMv2',
        body:
          'Due to various YAM versions available, it is affecting the adoption of YAMv3. Thus community should adopt only one latest version which is YAMv3 and define the final date where version 2 conversion to version 3 will end.',
        choices: [
          'Keep only YAM v3 and set a final date for conversion from older YAM version',
          'Continue to support YAM v2 to v3 without any end date',
        ],
        start: 1600776000,
        end: 1600948800,
        snapshot: '10925650',
        metadata: {},
      },
    },
    sig:
      '0xa6e84a708e6d8318fad43bf47c9077d3ca84ba7237b75f71a8ef202efac70546482e3db5c5987ac234217f90e9cf9b541aefcbf82ce7de8d78f0c197c5a49a271b',
    authorIpfsHash: 'QmQAkg2d4RyLEiWDg5LHHaVkRxpnKemoQivFJDcbscoh1B',
    relayerIpfsHash: 'Qmecpm2V1PkeLaPZtW3hjqYVz75EZbuGyjVbsTbYRfy71X',
  },
  slug: 'yearn',
};

const exampleVote = {
  body: {
    address: '0x72eb41AE7f943445Da9932662d31A06D56A3cfAa',
    msg: {
      version: '0.1.1',
      timestamp: '1598864758',
      token: '0xAba8cAc6866B83Ae4eec97DD07ED254282f6aD8A',
      type: 'vote',
      payload: {
        proposal: 'QmXAZP8tYwX2zZz5EzfxLZUYJt6TM9EmxY1L4qodhZ5zcZ',
        choice: 1,
      },
    },
    sig:
      '0x0e36f0e9495dd2528d18d36ef76bde51b5052a9635947edb56ff8f6c6ffc0319072bbb29550436b98635bcca817ebff6e3c5d6634c7c653c28a94fac2387de941c',
    authorIpfsHash: 'Qmb7gDNTPUv5oH7dVj9BjYNNQx1egySWwmja3X3YmmUAnE',
    relayerIpfsHash: 'QmWayvu9iymVGN9trU8CTmT8mPSbfP3nDxt6yJdnxpVk8R',
  },
  slug: 'yearn',
};
export { exampleVote, exampleProposal };
