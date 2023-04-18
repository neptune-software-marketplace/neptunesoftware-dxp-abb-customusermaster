function toggleEdit(editMode) {
    modelappControl.oData.editable = editMode;
    modelappControl.refresh();
}