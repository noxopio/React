const application = [
    { id: 1, name: 'React', url: 'https://reactjs.org/',visto:true },
    { id: 2, name: 'Vue', url: 'https://vuejs.org/' ,visto:true},
    { id: 3, name: 'Angular', url: 'https://angular.io/',visto:true },
    { id: 4, name: 'Svelte', url: 'https://svelte.dev/' ,visto:false},
    // { id: 5, name: 'Ember', url: 'https://emberjs.com/' },
    // { id: 6, name: 'Backbone', url: 'https://backbonejs.org/' },
    // { id: 7, name: 'Meteor', url: 'https://www.meteor.com/' },
    // { id: 8, name: 'Aurelia', url: 'https://aurelia.io/' },
    // { id: 9, name: 'Polymer', url: 'https://polymer-library.polymer-project.org/' },
]

export const ListadoApp = () => {
    return (
        <>
            <h1>Listado de aplicaciones</h1>
            <ul>
                {application.map(({ id, name,visto }) =>
                    (<li key={id}>{id}.{name}{visto && '✅' }</li>))
                }
            </ul>
        </>
    )
}