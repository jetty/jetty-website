#!groovy

pipeline {
  agent { node { label 'linux' } }
  tools { 
    maven 'maven3'
    jdk 'jdk21'
  }
  options {
    buildDiscarder logRotator( numToKeepStr: '25' )
  }

  stages {
    stage("Run Site Update") {
      steps {
        timeout(time: 90, unit: 'MINUTES') {
          withEnv(["MAVEN_OPTS=-Xms4g -Xmx8g -Djava.awt.headless=true"]) {
            configFileProvider([configFile(fileId: 'oss-settings.xml', variable: 'GLOBAL_MVN_SETTINGS')]) {
              withCredentials([sshUserPrivateKey(credentialsId: 'eclipse-website-git', keyFileVariable: 'SSH_KEY')]) {
                sh '''
                  GIT_SSH_COMMAND="ssh -i $SSH_KEY"
                  mkdir ~/.m2
                  cp $GLOBAL_MVN_SETTINGS ~/.m2/settings.xml
                  ./_update_for_releases.sh settings
                  ./_update_for_releases.sh update
                  
                  if [ -n "$(git status --porcelain)" ]; then
                    echo "Commiting Website Updates";
                    git add *;
                    git commit -m "Updating Website from Jenkins";
                    git push;
                  else
                    echo "No Website Updates";
                  fi
                '''
              }
            }
          }
        }
      }
    }
  }
}