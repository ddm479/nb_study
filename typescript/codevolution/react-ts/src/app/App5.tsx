import { Status } from '../components/5-advanced_props/Status'
import { Heading } from '../components/5-advanced_props/Heading'
import { Oscar } from '../components/5-advanced_props/Oscar'
import './App.css'
import { Greet } from '../components/5-advanced_props/Greet'

function App5() {
  const nameList = [
    {
      first: 'Bruce',
      last: 'Wayne'
    },
    {
      first: 'Clark',
      last: 'Kent'
    },
    {
      first: 'Princess',
      last: 'Diana'
    }
  ]
  
  return (
    <>
      <Status status='loading' />
      <Heading>Heading의 props속성 중 children부분이 나타난다.</Heading>
      <Oscar>
        <Heading>Heading컴포넌트를 Oscar 컴포넌트 자식 props로 전달</Heading>
      </Oscar>
      <Greet name='eggkim' messageCount={4} isLoggedIn={false} />
    </>
  )
}

export default App5
