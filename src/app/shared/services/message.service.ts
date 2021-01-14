import {Injectable} from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';

@Injectable({
    providedIn: 'root'
})

export class MessageService {

    constructor(private snackBar: MatSnackBar) {
    }

    displayErrorMessage(error: any) {
        if (error.message !== undefined) {
            this.snackBar.open('Erreur:' + error.message, '', {
                duration: 5000
            });
        } else {
            this.snackBar.open('Erreur:' + error, '', {
                duration: 5000
            });
        }

    }

    succcesMessage(text: string) {
        this.snackBar.open('Succès: ' + text, '', {
            duration: 5000
        });
    }
}
