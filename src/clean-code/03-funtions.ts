(() => {

    // función para obtener información de una película por Id
    function getMovieById(id: string) {
        console.log({ id });
    }

    // función para obtener información de los actores de una película - Actors o Cast // id = movieId getMovieCast
    function getMovieCastById(id: string) {
        console.log({ id });
    }

    // funcion para obtener el bio del actor por el id
    function getActorBioById(id: string) {
        console.log({ id });
    }

    interface Movie {
        cast: string[];
        description: string;
        rating: number;
        title: string;
    }

    // Crear una película
    function createMovie({ title, description, rating, cast }: Movie) {
        console.log({ title, description, rating, cast });
    }

    function checkFullName(fullName: string) {
        if (fullName === 'fernando') return false;
        return true;
    }

    // Crea un nuevo actor
    function createActor(fullName: string, birthDate: Date): boolean {

        // tarea asincrona para verificar nombre
        // ..
        // ..
        if (!checkFullName(fullName)) return false;

        console.log('Crear actor');
        return true;

    }

    //Continuar function
    const getPayAmount = ({ isDead = false, isSeparated = true, isRetired = false }) => {
        let result;
        if (isDead) {
            result = 1500;
        } else {
            if (isSeparated) {
                result = 2500;
            } else {
                if (isRetired) {
                    result = 3000;
                } else {
                    result = 4000;
                }
            }
        }
        return result;
    }
    //mejorando function de arriba
    const getPayAmountUpdated = ({ isDead = false, isSeparated = true, isRetired = false }): number => {

        if (isDead) return 1500;

        if (isSeparated) return 2500;

        return isRetired ? 3000: 4000;

    }
})();
