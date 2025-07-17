import './App.css'
import './index.css'
import Layout from "@/components/shared/layout/layout.tsx"
import {EventCard} from "@/features/planner/components/cards/EventCard.tsx";

function App() {

  return (
    <>
        <Layout>
            <EventCard />
        </Layout>
    </>
  )
}

export default App
