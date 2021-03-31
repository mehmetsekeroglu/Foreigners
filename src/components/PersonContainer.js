import PersonDetail from './PersonDetail'

export default function PersonContainer({list}){ 
    const allPersons = list.map(person => <PersonDetail {...person}/>)
    return (
        <main className="App-main">
          {allPersons}
        </main>
    )
  }