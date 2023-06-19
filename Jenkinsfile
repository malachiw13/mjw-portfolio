
pipeline {
    agent any
    stages {
        stage('Build') {
      agent {
        docker {
          image 'node:16'
        }
      }

      steps {
        echo 'Building..'
        sh 'node --version'
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
