#!/bin/bash

file_name="$(basename "$0")"

# Colores
RED="\e[31m"
GREEN="\e[32m"
YELLOW="\e[33m"
BLUE="\e[34m"
CIAN="\e[36m"
MAGENTA="\e[35m"
AMARILLO="\e[33m"
RESET="\e[0m"

show_usage() {
    printf "${GREEN} :-------------------------------------------------------------------------------:${RESET}\n"
    printf "${GREEN} |%-79s|${RESET}\n" " Uso:  "$(basename "$0")  " [pull|run|install]"
    printf "${GREEN} :-------------------------------------------------------------------------------:${RESET}\n"
    printf "${GREEN} |%-10s %-67s|${RESET}\n" "pull:" "Verifica que exista el repo, sino lo clona."
    printf "${GREEN} |%-10s %-67s|${RESET}\n" "" "Pasa a rama develop de los repos existentes y hace pull"
    printf "${GREEN} :-------------------------------------------------------------------------------:${RESET}\n"
    printf "${GREEN} |%-10s %-67s|${RESET}\n" "run:" "Despliega los microfronts existentes."
    printf "${GREEN} :-------------------------------------------------------------------------------:${RESET}\n"
    printf "${GREEN} :-------------------------------------------------------------------------------:${RESET}\n"
    printf "${GREEN} |%-10s %-67s|${RESET}\n" "install:" "Instala dependencias ."
    printf "${GREEN} :-------------------------------------------------------------------------------:${RESET}\n"
}
if [ $# -ne 1 ]; then
    printf "${RED}   :-------------------------------------------------------------------------------:${RESET}\n"
    printf "${RED}   |%-10s %50s ${RESET}\n" "" "Error: Se requiere un argumento"
    printf "${RED}   :-------------------------------------------------------------------------------:${RESET}\n"
    show_usage
    exit 1
fi

microfrontend_repos=(
  "https://github.com/"
  "https://github.com/"
 
)

if [ "$1" == "pull" ]; then

printf "${CIAN} :-------------------------------------------------------------------------------${RESET}\n"
printf "${BLUE} :<----------------------------------PULL------------------------------------>${RESET}\n"
printf "${CIAN} :-------------------------------------------------------------------------------${RESET}\n"

    for repo_url in "${microfrontend_repos[@]}"
    do
        repo_name=$(basename "$repo_url")
       
        printf "${CIAN} <----------------------------$repo_name---------------------------->${RESET}\n"
        
        if [ ! -d "$repo_name" ]; then
            git clone -b develop "$repo_url"
            cd "$repo_name"
           ## Instala las dependencias
            # npm install
            # Alternativa para instalar dependencias si es necesario manejar conflictos de versiones
            # npm i --legacy-peer-deps
            # Regresa al directorio anterior
            cd ..
        else
            # Si la carpeta existe, entra en ella
            cd "$repo_name"
            # Cambia a la rama 'develop'
            git checkout develop
            # Actualiza el repositorio con los cambios más recientes
            git pull
            # Regresa al directorio anterior
            cd ..
        fi
    done
    # Manejo del argumento 'run'
    elif [ "$1" == "run" ]; then
    # Itera sobre cada URL de repositorio

    printf "${CIAN}  :-------------------------------------------------------------------------------:${RESET}\n"
    printf "${GREEN} :<-----------------------------------START----------------------------------->${RESET}\n"
    printf "${CIAN}  :-------------------------------------------------------------------------------:${RESET}\n"

    for repo_url in "${microfrontend_repos[@]}"
    do
        repo_name=$(basename "$repo_url")
        printf "${CIAN} :<-------------------------$repo_name------------------------->${RESET}\n"

    if [[ "$repo_name" == *"shell"* ]]; then 
    start bash -c "cd $repo_name;npm run start:local"
    else

## Inicia el servidor para el microfrontend usando npm start en segundo plano
        (cd "$repo_name"; npm run start) &
        fi 
    done
    wait
    
    # para el caso de que se quiera correr los microfronts de manera secuencial
    # elif [ "$1" == "run" ]; then
    #     for repo_url in "${microfrontend_repos[@]}"
    #     do
    #         # Extraer el nombre del repositorio de la URL
    #         repo_name=$(basename "$repo_url")
    
    #         # Iniciar el script npm start en cada directorio
    #         start bash -c "cd $repo_name; npm start"
    #     done

    # Manejo del argumento 'install'
elif [ "$1" == "install" ]; then
    
     printf "${CIAN}    :-------------------------------------------------------------------------------:${RESET}\n"
     printf "${MAGENTA} :<---------------------------------INSTALL----------------------------------->:${RESET}\n"
     printf "${CIAN}    :-------------------------------------------------------------------------------:${RESET}\n"
   
    for repo_url in "${microfrontend_repos[@]}"; do
        repo_name=$(basename "$repo_url")
        printf "${CIAN} <----------------------------$repo_name---------------------------->${RESET}\n"
        
        if [ -d "$repo_name" ]; then
            cd "$repo_name"
            if [ ! -d "node_modules" ]; then
                npm install
            else
                printf "${AMARILLO} [INFO] Las dependencias ya están instaladas en $repo_name${RESET}\n"
            fi
            cd ..
        else
            printf "${RED} [ERROR] El repositorio $repo_name no existe. Clona primero usando 'pull'.${RESET}\n"
        fi
    done
    
else
    printf "${RED} :-------------------------------------------------------------------------------:${RESET}\n"
    printf "${RED} %-10s %50s ${RESET}\n" "" "Error: Argumento inválido"
    printf "${RED} :-------------------------------------------------------------------------------:${RESET}\n"
    printf "${RED} :-------------------------------------------------------------------------------:${RESET}\n"
    show_usage
    exit 1
fi
# npm cache clean --force
