# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

```
proyecto-final
├─ backend
│  ├─ logic
│  │  ├─ flightRelated
│  │  │  └─ amadeusAuth.js
│  │  └─ user
│  │     ├─ registerUser.js
│  │     ├─ updateEmail.js
│  │     ├─ updatePassword.js
│  │     └─ updateUsername.js
│  ├─ middlewares
│  │  └─ authMiddleware.js
│  ├─ models
│  │  └─ User.js
│  ├─ package-lock.json
│  ├─ package.json
│  ├─ routes
│  │  ├─ amadeusClient.js
│  │  ├─ flightOffers.js
│  │  └─ userRoutes.js
│  ├─ server.js
│  └─ tests
├─ frontend
│  ├─ eslint.config.js
│  ├─ index.html
│  ├─ package-lock.json
│  ├─ package.json
│  ├─ postcss.config.js
│  ├─ public
│  │  └─ vite.svg
│  ├─ src
│  │  ├─ airports.js
│  │  ├─ App.jsx
│  │  ├─ assets
│  │  │  └─ react.svg
│  │  ├─ components
│  │  │  ├─ AirportPicker.jsx
│  │  │  ├─ DatePickerYellow.jsx
│  │  │  ├─ flightRelatedForms
│  │  │  ├─ Footer.jsx
│  │  │  ├─ handlers.jsx
│  │  │  ├─ handlersAUX.jsx
│  │  │  ├─ Header.jsx
│  │  │  ├─ icons.jsx
│  │  │  ├─ index.jsx
│  │  │  ├─ LoginForm.jsx
│  │  │  ├─ profileForm.jsx
│  │  │  ├─ RegisterForm.jsx
│  │  │  ├─ SearchFlightsForm.jsx
│  │  │  ├─ ShowFlights.jsx
│  │  │  └─ UserMenu.jsx
│  │  ├─ index.css
│  │  ├─ index.jsx
│  │  ├─ locales
│  │  │  └─ es.json
│  │  ├─ logic
│  │  │  ├─ deleteUser.js
│  │  │  ├─ isUserLoggedIn.js
│  │  │  ├─ login.js
│  │  │  └─ logout.js
│  │  ├─ pages
│  │  │  ├─ Home.jsx
│  │  │  ├─ index.jsx
│  │  │  ├─ MyProfile.jsx
│  │  │  ├─ MyProfileAUX.jsx
│  │  │  ├─ Register.jsx
│  │  │  └─ SignIn.jsx
│  │  ├─ reportWebVitals.js
│  │  ├─ services
│  │  │  ├─ authService.js
│  │  │  └─ userService.js
│  │  └─ tools
│  │     ├─ errors.js
│  │     ├─ index.js
│  │     └─ validator.js
│  ├─ tailwind.config.js
│  └─ vite.config.js
├─ git-filter-repo
│  ├─ contrib
│  │  └─ filter-repo-demos
│  │     ├─ barebones-example
│  │     ├─ bfg-ish
│  │     ├─ clean-ignore
│  │     ├─ convert-svnexternals
│  │     ├─ filter-branch-ish
│  │     ├─ filter-lamely
│  │     ├─ insert-beginning
│  │     ├─ lint-history
│  │     ├─ README.md
│  │     └─ signed-off-by
│  ├─ COPYING
│  ├─ COPYING.gpl
│  ├─ COPYING.mit
│  ├─ Documentation
│  │  ├─ Contributing.md
│  │  ├─ converting-from-bfg-repo-cleaner.md
│  │  ├─ converting-from-filter-branch.md
│  │  ├─ examples-from-user-filed-issues.md
│  │  ├─ FAQ.md
│  │  └─ git-filter-repo.txt
│  ├─ git-filter-repo
│  ├─ git_filter_repo.py
│  ├─ INSTALL.md
│  ├─ Makefile
│  ├─ pyproject.toml
│  ├─ README.md
│  └─ t
│     ├─ run_coverage
│     ├─ run_tests
│     ├─ t9390
│     │  ├─ basic
│     │  ├─ basic-filename
│     │  ├─ basic-mailmap
│     │  ├─ basic-message
│     │  ├─ basic-numbers
│     │  ├─ basic-replace
│     │  ├─ basic-ten
│     │  ├─ basic-twenty
│     │  ├─ degenerate
│     │  ├─ degenerate-evil-merge
│     │  ├─ degenerate-globme
│     │  ├─ degenerate-keepme
│     │  ├─ degenerate-keepme-noff
│     │  ├─ degenerate-moduleA
│     │  ├─ empty
│     │  ├─ empty-keepme
│     │  ├─ less-empty-keepme
│     │  ├─ more-empty-keepme
│     │  ├─ sample-mailmap
│     │  ├─ sample-message
│     │  ├─ sample-replace
│     │  ├─ unusual
│     │  ├─ unusual-filtered
│     │  └─ unusual-mailmap
│     ├─ t9390-filter-repo-basics.sh
│     ├─ t9391
│     │  ├─ commit_info.py
│     │  ├─ create_fast_export_output.py
│     │  ├─ emoji-repo
│     │  ├─ erroneous.py
│     │  ├─ file_filter.py
│     │  ├─ print_progress.py
│     │  ├─ rename-master-to-develop.py
│     │  ├─ splice_repos.py
│     │  ├─ strip-cvs-keywords.py
│     │  └─ unusual.py
│     ├─ t9391-filter-repo-lib-usage.sh
│     ├─ t9392-filter-repo-python-callback.sh
│     ├─ t9393
│     │  ├─ lfs
│     │  └─ simple
│     ├─ t9393-filter-repo-rerun.sh
│     ├─ t9394
│     │  └─ date-order
│     ├─ t9394-filter-repo-sanity-checks-and-bigger-repo-setup.sh
│     ├─ test-lib-functions.sh
│     └─ test-lib.sh
├─ package-lock.json
├─ package.json
└─ README.md

```
```
proyecto-final
├─ backend
│  ├─ logic
│  │  ├─ flightRelated
│  │  │  └─ amadeusAuth.js
│  │  └─ user
│  │     ├─ index.js
│  │     ├─ registerUser.js
│  │     ├─ updateEmail.js
│  │     ├─ updatePassword.js
│  │     └─ updateUsername.js
│  ├─ middlewares
│  │  └─ authMiddleware.js
│  ├─ models
│  │  └─ User.js
│  ├─ package-lock.json
│  ├─ package.json
│  ├─ routes
│  │  ├─ amadeusClient.js
│  │  ├─ flightOffers.js
│  │  └─ userRoutes.js
│  ├─ server.js
│  └─ tests
├─ frontend
│  ├─ eslint.config.js
│  ├─ index.html
│  ├─ package-lock.json
│  ├─ package.json
│  ├─ postcss.config.js
│  ├─ public
│  │  └─ vite.svg
│  ├─ src
│  │  ├─ airports.js
│  │  ├─ App.jsx
│  │  ├─ assets
│  │  │  └─ react.svg
│  │  ├─ components
│  │  │  ├─ AirportPicker.jsx
│  │  │  ├─ DatePickerYellow.jsx
│  │  │  ├─ flightRelatedForms
│  │  │  ├─ Footer.jsx
│  │  │  ├─ handlers.jsx
│  │  │  ├─ handlersAUX.jsx
│  │  │  ├─ Header.jsx
│  │  │  ├─ icons.jsx
│  │  │  ├─ index.jsx
│  │  │  ├─ LoginForm.jsx
│  │  │  ├─ profileForm.jsx
│  │  │  ├─ RegisterForm.jsx
│  │  │  ├─ SearchFlightsForm.jsx
│  │  │  ├─ ShowFlights.jsx
│  │  │  └─ UserMenu.jsx
│  │  ├─ handlers
│  │  │  ├─ flightHandlers
│  │  │  └─ userHandlers
│  │  │     ├─ handleUpdateEmail.js
│  │  │     └─ index.js
│  │  ├─ index.css
│  │  ├─ index.jsx
│  │  ├─ locales
│  │  │  └─ es.json
│  │  ├─ logic
│  │  │  ├─ deleteUser.js
│  │  │  ├─ isUserLoggedIn.js
│  │  │  ├─ login.js
│  │  │  └─ logout.js
│  │  ├─ pages
│  │  │  ├─ Home.jsx
│  │  │  ├─ index.jsx
│  │  │  ├─ MyProfile.jsx
│  │  │  ├─ MyProfileAUX.jsx
│  │  │  ├─ Register.jsx
│  │  │  └─ SignIn.jsx
│  │  ├─ reportWebVitals.js
│  │  ├─ services
│  │  │  ├─ authService.js
│  │  │  └─ userService.js
│  │  └─ tools
│  │     ├─ errors.js
│  │     ├─ index.js
│  │     └─ validator.js
│  ├─ tailwind.config.js
│  └─ vite.config.js
├─ git-filter-repo
│  ├─ contrib
│  │  └─ filter-repo-demos
│  │     ├─ barebones-example
│  │     ├─ bfg-ish
│  │     ├─ clean-ignore
│  │     ├─ convert-svnexternals
│  │     ├─ filter-branch-ish
│  │     ├─ filter-lamely
│  │     ├─ insert-beginning
│  │     ├─ lint-history
│  │     ├─ README.md
│  │     └─ signed-off-by
│  ├─ COPYING
│  ├─ COPYING.gpl
│  ├─ COPYING.mit
│  ├─ Documentation
│  │  ├─ Contributing.md
│  │  ├─ converting-from-bfg-repo-cleaner.md
│  │  ├─ converting-from-filter-branch.md
│  │  ├─ examples-from-user-filed-issues.md
│  │  ├─ FAQ.md
│  │  └─ git-filter-repo.txt
│  ├─ git-filter-repo
│  ├─ git_filter_repo.py
│  ├─ INSTALL.md
│  ├─ Makefile
│  ├─ pyproject.toml
│  ├─ README.md
│  └─ t
│     ├─ run_coverage
│     ├─ run_tests
│     ├─ t9390
│     │  ├─ basic
│     │  ├─ basic-filename
│     │  ├─ basic-mailmap
│     │  ├─ basic-message
│     │  ├─ basic-numbers
│     │  ├─ basic-replace
│     │  ├─ basic-ten
│     │  ├─ basic-twenty
│     │  ├─ degenerate
│     │  ├─ degenerate-evil-merge
│     │  ├─ degenerate-globme
│     │  ├─ degenerate-keepme
│     │  ├─ degenerate-keepme-noff
│     │  ├─ degenerate-moduleA
│     │  ├─ empty
│     │  ├─ empty-keepme
│     │  ├─ less-empty-keepme
│     │  ├─ more-empty-keepme
│     │  ├─ sample-mailmap
│     │  ├─ sample-message
│     │  ├─ sample-replace
│     │  ├─ unusual
│     │  ├─ unusual-filtered
│     │  └─ unusual-mailmap
│     ├─ t9390-filter-repo-basics.sh
│     ├─ t9391
│     │  ├─ commit_info.py
│     │  ├─ create_fast_export_output.py
│     │  ├─ emoji-repo
│     │  ├─ erroneous.py
│     │  ├─ file_filter.py
│     │  ├─ print_progress.py
│     │  ├─ rename-master-to-develop.py
│     │  ├─ splice_repos.py
│     │  ├─ strip-cvs-keywords.py
│     │  └─ unusual.py
│     ├─ t9391-filter-repo-lib-usage.sh
│     ├─ t9392-filter-repo-python-callback.sh
│     ├─ t9393
│     │  ├─ lfs
│     │  └─ simple
│     ├─ t9393-filter-repo-rerun.sh
│     ├─ t9394
│     │  └─ date-order
│     ├─ t9394-filter-repo-sanity-checks-and-bigger-repo-setup.sh
│     ├─ test-lib-functions.sh
│     └─ test-lib.sh
├─ package-lock.json
├─ package.json
└─ README.md

```
```
proyecto-final
├─ backend
│  ├─ logic
│  │  ├─ flightRelated
│  │  │  └─ amadeusAuth.js
│  │  └─ user
│  │     ├─ addNewFavouriteRoute.js
│  │     ├─ addNewFavouriteRoute.spec.js
│  │     ├─ deleteFavouriteRoute.js
│  │     ├─ deleteFavouriteRoute.spec.js
│  │     ├─ deleteUser.js
│  │     ├─ deleteUser.spec.js
│  │     ├─ favouriteRoutes.js
│  │     ├─ getFavouriteRoutes.js
│  │     ├─ getFavouriteRoutes.spec.js
│  │     ├─ index.js
│  │     ├─ registerUser.js
│  │     ├─ registerUser.spec.js
│  │     ├─ updateDateOfBirth.js
│  │     ├─ updateDateOfBirth.spec.js
│  │     ├─ updateEmail.js
│  │     ├─ updateEmail.spec.js
│  │     ├─ updatePassword.js
│  │     ├─ updatePassword.spec.js
│  │     ├─ updateUsername.js
│  │     └─ updateUsername.spec.js
│  ├─ middlewares
│  │  └─ authMiddleware.js
│  ├─ models
│  │  ├─ FavouriteRoute.js
│  │  ├─ User.js
│  │  └─ UserAUX.js
│  ├─ package-lock.json
│  ├─ package.json
│  ├─ routes
│  │  ├─ amadeusClient.js
│  │  ├─ favouriteRoutes.js
│  │  ├─ flightOffers.js
│  │  └─ userRoutes.js
│  ├─ server.js
│  ├─ tests
│  └─ tools
│     ├─ errors.js
│     ├─ index.js
│     └─ validator.js
├─ frontend
│  ├─ eslint.config.js
│  ├─ index.html
│  ├─ package-lock.json
│  ├─ package.json
│  ├─ postcss.config.js
│  ├─ public
│  │  └─ vite.svg
│  ├─ src
│  │  ├─ airlines.js
│  │  ├─ airlines_iata_codes.js
│  │  ├─ airports.js
│  │  ├─ App.jsx
│  │  ├─ assets
│  │  │  └─ react.svg
│  │  ├─ components
│  │  │  ├─ AirportPicker.jsx
│  │  │  ├─ DatePickerYellow.jsx
│  │  │  ├─ Footer.jsx
│  │  │  ├─ handlers.jsx
│  │  │  ├─ handlersAUX.jsx
│  │  │  ├─ Header.jsx
│  │  │  ├─ icons.jsx
│  │  │  ├─ index.jsx
│  │  │  ├─ LoginForm.jsx
│  │  │  ├─ MyFavouriteRoutesForm.jsx
│  │  │  ├─ RegisterForm.jsx
│  │  │  ├─ SearchFlightsForm.jsx
│  │  │  ├─ ShowFlights.jsx
│  │  │  └─ UserMenu.jsx
│  │  ├─ handlers
│  │  │  ├─ flightHandlers
│  │  │  │  └─ handleSearch.js
│  │  │  └─ userHandlers
│  │  │     ├─ handleAddToFavourites.js
│  │  │     ├─ handleDeleteFavouriteRoute.js
│  │  │     ├─ handleDeleteUser.js
│  │  │     ├─ handleGetFavouriteRoutes.js
│  │  │     ├─ handleUpdateDateOfBirth.js
│  │  │     ├─ handleUpdateEmail.js
│  │  │     ├─ handleUpdateName.js
│  │  │     ├─ handleUpdatePassword.js
│  │  │     └─ index.js
│  │  ├─ hooks
│  │  │  ├─ useSearchParams.js
│  │  │  └─ useUserData.js
│  │  ├─ index.css
│  │  ├─ index.jsx
│  │  ├─ locales
│  │  │  └─ es.json
│  │  ├─ logic
│  │  │  ├─ deleteUser.js
│  │  │  ├─ isUserLoggedIn.js
│  │  │  ├─ login.js
│  │  │  └─ logout.js
│  │  ├─ pages
│  │  │  ├─ FlightResults.jsx
│  │  │  ├─ Home.jsx
│  │  │  ├─ index.jsx
│  │  │  ├─ MyFavouriteRoutes.jsx
│  │  │  ├─ MyProfile.jsx
│  │  │  ├─ Register.jsx
│  │  │  └─ SignIn.jsx
│  │  ├─ reportWebVitals.js
│  │  └─ tools
│  │     ├─ errors.js
│  │     ├─ index.js
│  │     └─ validator.js
│  ├─ tailwind.config.js
│  └─ vite.config.js
├─ git-filter-repo
│  ├─ contrib
│  │  └─ filter-repo-demos
│  │     ├─ barebones-example
│  │     ├─ bfg-ish
│  │     ├─ clean-ignore
│  │     ├─ convert-svnexternals
│  │     ├─ filter-branch-ish
│  │     ├─ filter-lamely
│  │     ├─ insert-beginning
│  │     ├─ lint-history
│  │     ├─ README.md
│  │     └─ signed-off-by
│  ├─ COPYING
│  ├─ COPYING.gpl
│  ├─ COPYING.mit
│  ├─ Documentation
│  │  ├─ Contributing.md
│  │  ├─ converting-from-bfg-repo-cleaner.md
│  │  ├─ converting-from-filter-branch.md
│  │  ├─ examples-from-user-filed-issues.md
│  │  ├─ FAQ.md
│  │  └─ git-filter-repo.txt
│  ├─ git-filter-repo
│  ├─ git_filter_repo.py
│  ├─ INSTALL.md
│  ├─ Makefile
│  ├─ pyproject.toml
│  ├─ README.md
│  └─ t
│     ├─ run_coverage
│     ├─ run_tests
│     ├─ t9390
│     │  ├─ basic
│     │  ├─ basic-filename
│     │  ├─ basic-mailmap
│     │  ├─ basic-message
│     │  ├─ basic-numbers
│     │  ├─ basic-replace
│     │  ├─ basic-ten
│     │  ├─ basic-twenty
│     │  ├─ degenerate
│     │  ├─ degenerate-evil-merge
│     │  ├─ degenerate-globme
│     │  ├─ degenerate-keepme
│     │  ├─ degenerate-keepme-noff
│     │  ├─ degenerate-moduleA
│     │  ├─ empty
│     │  ├─ empty-keepme
│     │  ├─ less-empty-keepme
│     │  ├─ more-empty-keepme
│     │  ├─ sample-mailmap
│     │  ├─ sample-message
│     │  ├─ sample-replace
│     │  ├─ unusual
│     │  ├─ unusual-filtered
│     │  └─ unusual-mailmap
│     ├─ t9390-filter-repo-basics.sh
│     ├─ t9391
│     │  ├─ commit_info.py
│     │  ├─ create_fast_export_output.py
│     │  ├─ emoji-repo
│     │  ├─ erroneous.py
│     │  ├─ file_filter.py
│     │  ├─ print_progress.py
│     │  ├─ rename-master-to-develop.py
│     │  ├─ splice_repos.py
│     │  ├─ strip-cvs-keywords.py
│     │  └─ unusual.py
│     ├─ t9391-filter-repo-lib-usage.sh
│     ├─ t9392-filter-repo-python-callback.sh
│     ├─ t9393
│     │  ├─ lfs
│     │  └─ simple
│     ├─ t9393-filter-repo-rerun.sh
│     ├─ t9394
│     │  └─ date-order
│     ├─ t9394-filter-repo-sanity-checks-and-bigger-repo-setup.sh
│     ├─ test-lib-functions.sh
│     └─ test-lib.sh
├─ package-lock.json
├─ package.json
└─ README.md

```