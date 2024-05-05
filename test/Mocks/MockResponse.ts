import { Response } from "express"

class MockResponse{

    mockRes = {
        send: jest.fn(),
        status: jest.fn().mockReturnValue({
            send: jest.fn().mockImplementation()
        })
    } as unknown as Response

}

export default new MockResponse()