      if (isFormValid && this.formData.email) {
        const currentEmail = this.formData.email.toLowerCase().trim();

        // Filter out the current user's email if we're in edit mode.
        // This prevents a user from being blocked by their own existing email.
        const emailsToCheck = this.isEditMode
          ? this.existingEmails.filter(email => email !== this.formDataEdit.email.toLowerCase().trim())
          : this.existingEmails;

const emailsToCheck = this.isEditMode ? this.existingEmails.filter(email => email !== this.formDataEdit.email.toLowerCase().trim())
          : this.existingEmails;

        // Check if the current email is already in the array of emails to check
        if (emailsToCheck.includes(currentEmail)) {
          this.formErrors.email = 'This email address is already registered.';
          isFormValid = false;
        }
      }
