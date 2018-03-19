const { expect } = require('chai')
const { sphereVolume, torusVolume } = require('../src/volumes')

describe('Canary test', function () {
  it('expects true to be true', function () {
    expect(true).to.equal(true)
  })
})

describe('volume tests', function() {
  it('calculates sphere volume correctly', function() {
    expect(sphereVolume(1)).to.equal(4.1887902047863905)
  })
  it('calculates torus volume correctly', function() {
    expect(torusVolume(4, 3)).to.equal(710.6115168784338)
  })
})
