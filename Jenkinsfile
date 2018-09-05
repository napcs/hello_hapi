#!/usr/bin/env groovy

pipeline {

    agent {
        docker {
            image 'node:carbon'
            args '-u root'
        }
    }

    stages {
        stage('Build') {
            steps {
                echo 'Building sw'
                sh 'npm install'
            }
        }
        stage('Test') {
            steps {
                echo 'Testing of sw'
                sh 'npm test'
            }
        }
    }
}
