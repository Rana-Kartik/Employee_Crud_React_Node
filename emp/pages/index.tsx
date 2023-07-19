import {Button, Card, CardGroup, CardHeader, Container, Grid, GridColumn, GridRow} from 'semantic-ui-react'
import Link from 'next/link'
import { Router, useRouter } from 'next/router'

export default function Home({tasks = []}) {
  const router = useRouter()
  if(tasks.length === 0)
  {
    return (
      <Grid centered verticalAlign='middle' columns="1" style={{height: "88vh"}}>
          <GridRow>
              <GridColumn textAlign='center'>
                    <h1>There are no tasks present please created new one</h1>
                    <div>
                      <Button primary onClick={() => router.push("/tasks/new")}>
                          Create Task
                      </Button>
                    </div>
              </GridColumn>
          </GridRow>
      </Grid>
    )
  }
  return (
   
     <Container>
       <CardGroup itemsPerRow={4}>
            {tasks && tasks.map((task) =>  (

              <Card key={task}>
                  <Card.Content>
                    <CardHeader>
                        <Link href={`/tasks/${task}`} legacyBehavior>
                         <a>{task}</a>
                        </Link>
                    </CardHeader>
                    <p>{task}</p>
                  </Card.Content>
                  <Card.Content>
                  <Button size='mini'
                   color='orange'
                    onClick={() => router.push("/tasks/new")}>
                            View
                   </Button>
                   <Button size='mini'
                   color='blue'
                    onClick={() => router.push("/tasks/new")}>
                            Edit
                   </Button>
                  </Card.Content>
              </Card>
            ))}
       </CardGroup>
     </Container>
  )
}


export async function getServerSideProps(){
  const response = await fetch("http://localhost:3000/api/tasks")
  const tasks = await response.json()
  console.log("Result data", tasks)
  return{
    props: {
      tasks
    }
  }
}