Express to Serverless:
Pros: 
reduced cost 
out-of-the-box deployment scalability and monitoring 
lightning-fast development.

Using Examples
Just with the Hello World index.yml example, we get following by default:
1.Monitoring from AWS Lambda
2.Logging from AWS Cloudwatch
3.Autoscaling from AWS Lambda
4.Deployment from Serverless & AWS Cloudformation

Cost:
One T2-Medium EC2 Linux Machine on AWS costs you about $33 per month to run. can  use many of these machines.
With Serverless + AWS Lambda, you get 1 million requests for free each month.

Cons:
loss of control
the enigmatic Lambda runtime
young ecosystem
no out-of-the-box zero-downtime deployment

Using Examples:
1. Need to deal with certain oddities of the AWS Lambda function, like the funky event and context objects that are injected into your handlers

