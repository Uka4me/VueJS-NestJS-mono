export interface AuthPayloadDto {
  access_token: string;
}

export class BackendApiService {
  protected baseUrl = '/api';

  protected get accessToken(): AuthPayloadDto | undefined {
    const token = localStorage.getItem('token');
    
    if (token) {
      return JSON.parse(token)
    }
  }

  protected get config(): RequestInit {
    return {
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${this.accessToken?.access_token}`
      }
    };
  }

  protected async Get<T>(path: string, config?: RequestInit): Promise<T> {
    const init = {method: 'GET', ...this.config, ...config}
    return await this.http<T>(path, init)
  }
  
  protected async Post<T, U>(path: string, body: T, config?: RequestInit): Promise<U> {
    const init = {method: 'POST', body: JSON.stringify(body), ...this.config, ...config}
    return await this.http<U>(path, init)
  }
  
  protected async Put<T, U>(path: string, body: T, config?: RequestInit): Promise<U> {
    const init = {method: 'PUT', body: JSON.stringify(body), ...this.config, ...config}
    return await this.http<U>(path, init)
  }

  protected async Delete<T>(path: string, config?: RequestInit): Promise<T> {
    const init = {method: 'DELETE', ...this.config, ...config}
    return await this.http<T>(path, init)
  }

  private async http<T>(path: string, config: RequestInit): Promise<T> {
    const request = new Request([this.baseUrl, path].filter(Boolean).join('/'), config)
    const response = await fetch(request)
  
    if(!response.ok) {
      // throw new Error(response.statusText, { cause: response })
      throw response;
    }

    return response.json().catch(() => ({}))
  }
}