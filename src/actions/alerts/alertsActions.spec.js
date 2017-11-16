import * as actions from '../'

describe('setAlerts actions', () => {
  it('setAlerts should create SET_ALERTS action', () => {
    const expected = {};

    expect(actions.alerts.set(expected)).toEqual({
      type: 'SET_ALERTS',
      alerts: expected
    })
  })
})
