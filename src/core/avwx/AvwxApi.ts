import 'dotenv/config'
import axios, { AxiosInstance, AxiosResponse } from 'axios'

class AvwxApi {
  private API_CODE: string;
  private requester: AxiosInstance;

  // API URLs
  private API_BASE = 'https://avwx.rest/api'

  constructor () {
    this.API_CODE = process.env.API_AVWX_KEY
    this.configApi()
  }

  private configApi (): void{
    this.requester = axios.create({
      baseURL: this.API_BASE,
      headers: {
        Authorization: `TOKEN ${this.API_CODE}`
      }
    })
  }

  public async metarIcao (icao = ''): Promise<AxiosResponse> {
    if (!icao || icao === '') {
      throw Error('No ICAO provided')
    }
    return this.requester.get(`/metar/${icao}`)
  }
}

export default new AvwxApi()
