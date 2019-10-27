import { Request, Response } from 'express'

class PagesController {
  public async index (req: Request, res: Response): Promise<Response> {
    return res.send('Hello word')
  }
}

export default new PagesController()
