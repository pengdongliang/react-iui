import { MainRuntime } from '@teambit/cli'

import { ProviderAspect } from './provider.aspect'

export class ProviderMain {
  // your aspect API goes here.
  getSomething() {}

  static slots = []

  // define your aspect dependencies here.
  // in case you need to use another aspect API.
  static dependencies = []

  static runtime = MainRuntime

  static async provider() {
    return new ProviderMain()
  }
}

ProviderAspect.addRuntime(ProviderMain)

export default ProviderMain
