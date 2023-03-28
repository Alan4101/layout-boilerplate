import gulp from 'gulp'

import { path, plugins } from './gulp/config/index.js'
import { copy, reset, html, server, scss } from './gulp/tasks/index.js'

global.app = {
    path,
    gulp,
    plugins
}

function watcher () {
    gulp.watch(path.watch.files, copy)
    gulp.watch(path.watch.html, html)
    gulp.watch(path.watch.html, scss)
}

const mainTasks = gulp.parallel(copy, html) 

// Сценарій послідовності запуску задач
const dev = gulp.series(reset, mainTasks, gulp.parallel(watcher, server)) 

gulp.task('default', dev)
