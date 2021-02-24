export default function NavBar() {
    return (
        <footer className="bg-gray-100 dark:bg-gray-800">
            <p className="py-8 text-center dark:text-white">© 2017-{new Date().getFullYear()} | <a className="text-red-600 dark:text-red-400" href="#">Devil Multi-Gaming</a> | Tous droits réservés</p>
        </footer>
    );
}