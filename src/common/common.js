const formatDate = (string) =>{
    var options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(string).toLocaleDateString([],options);
}

const formatTitle = (title) => {
    var new_title = null;
    if(title.length > 35){
        new_title = `${title.substring(0, 35)}...`
    }else{
        new_title = title;
    }
    return new_title;
}

export const common = {
    formatDate,
    formatTitle
}