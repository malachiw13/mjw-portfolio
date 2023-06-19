pipeline {
    agent any

    stages {
        stage('Build') {
            docker {
                image "node:16"
            }
            steps {
                echo 'Building..'
                sh "npm ci"
            }
        }
        stage('Test') {
            steps {
                echo 'Testing..'
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying....'
            }
        }
    }
}