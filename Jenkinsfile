pipeline {
  agent any 

  stages {
    stage('build') {
      steps {
        echo 'Build'
        sh 'npm install'
      }
    }
    
    stage ('Test') {
      steps {
        echo 'npm test'
        sh 'npm test'
      }
    }
  }

  post {
    always {
      echo 'Pipeline finished'
    }
  }
}
