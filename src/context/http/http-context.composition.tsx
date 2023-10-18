import { HttpProvider } from './http-context-provider'

const TestRequest = () => {
  return <div>111</div>
}

export const BasicHttp = () => {
  return (
    <HttpProvider>
      <TestRequest />
    </HttpProvider>
  )
}
