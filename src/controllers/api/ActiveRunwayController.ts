import { Request, Response } from 'express'
import AvwxApi from '../../core/avwx/AvwxApi'
import _ from 'lodash'

class ActiveRunwayController {
  public async getActiveRunway (req: Request, res: Response): Response {
    const { icao, decMag, direction, runways } = req.params

    const erros: Array<Record<string, string>> = []

    if (!icao || !decMag || !direction) {
      erros.push({ message: 'No icao or decMag or direction provided' })
    }

    if (_.isEmpty(runways)) {
      erros.push({ message: 'No runways provided' })
    }

    if (!_.isEmpty(erros)) {
      res.status(400)
      return res.send(erros)
    }

    try {
      const response = await AvwxApi.metarIcao(icao)
      const { meta, sanitized, wind_direction, wind_speed } = response.data

      // Todo cálculo da pista ativa
    } catch (error) {
      res.status(401)
      return res.send({ err: error.message })
    }

    return res.send({ ok: 'ok' })
  }
}

export default new ActiveRunwayController()
