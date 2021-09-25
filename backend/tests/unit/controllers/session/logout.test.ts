import { logout } from '../../../../src/controllers/session/logout'
import { getMockReq, getMockRes } from '@jest-mock/express'

describe('logout', () => {
  const req = getMockReq()
  const { res, clearMockRes } = getMockRes()

  beforeEach(() => {
    clearMockRes()

    req.logout = jest.fn()
  })

  it('should logout', () => {
    logout(req, res)
    expect(req.logout).toHaveBeenCalled()
  })

  it('should send 204 status', () => {
    logout(req, res)
    expect(res.sendStatus).toHaveBeenCalledWith(204)
  })
})
